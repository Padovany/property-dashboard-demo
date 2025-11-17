"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { log } from "console";


/*
If you run this project for testing, you might want to populate some dummy readings data in supabase, as this page actually fetches data
from there. I've used this for testing:
Properties:
INSERT INTO properties (name) VALUES
  ('Greenwood Heights Apartments'),
  ('Riverside Park Residences'),
  ('Oak Crest Villas'),
  ('Lakeside Horizon Tower'),
  ('Maplewood Gardens'),
  ('Sunset Ridge Condominiums'),
  ('Willow Creek Estates'),
  ('Parkview Central Lofts'),
  ('Highland Summit Residences'),
  ('Cedar Grove Townhomes');

Readings:
INSERT INTO readings (property_id, value, created_at) VALUES
-- Property 2
(2, 42.3, NOW() - INTERVAL '12 days'),
(2, 55.8, NOW() - INTERVAL '11 days'),
(2, 61.2, NOW() - INTERVAL '10 days'),
(2, 48.9, NOW() - INTERVAL '9 days'),
(2, 59.4, NOW() - INTERVAL '8 days'),
(2, 63.7, NOW() - INTERVAL '7 days'),
(2, 57.1, NOW() - INTERVAL '6 days'),
(2, 51.9, NOW() - INTERVAL '5 days'),
(2, 46.2, NOW() - INTERVAL '4 days'),
(2, 59.7, NOW() - INTERVAL '3 days'),
(2, 62.5, NOW() - INTERVAL '2 days'),
(2, 58.1, NOW() - INTERVAL '1 day'),

-- Property 3
(3, 38.4, NOW() - INTERVAL '12 days'),
(3, 49.1, NOW() - INTERVAL '11 days'),
(3, 52.6, NOW() - INTERVAL '10 days'),
(3, 47.4, NOW() - INTERVAL '9 days'),
(3, 55.9, NOW() - INTERVAL '8 days'),
(3, 60.3, NOW() - INTERVAL '7 days'),
(3, 54.8, NOW() - INTERVAL '6 days'),
(3, 50.1, NOW() - INTERVAL '5 days'),
(3, 44.2, NOW() - INTERVAL '4 days'),
(3, 56.3, NOW() - INTERVAL '3 days'),
(3, 59.0, NOW() - INTERVAL '2 days'),
(3, 57.8, NOW() - INTERVAL '1 day'),

-- Property 4
(4, 41.0, NOW() - INTERVAL '12 days'),
(4, 52.2, NOW() - INTERVAL '11 days'),
(4, 58.9, NOW() - INTERVAL '10 days'),
(4, 45.7, NOW() - INTERVAL '9 days'),
(4, 53.8, NOW() - INTERVAL '8 days'),
(4, 61.1, NOW() - INTERVAL '7 days'),
(4, 55.0, NOW() - INTERVAL '6 days'),
(4, 49.9, NOW() - INTERVAL '5 days'),
(4, 46.7, NOW() - INTERVAL '4 days'),
(4, 58.4, NOW() - INTERVAL '3 days'),
(4, 60.9, NOW() - INTERVAL '2 days'),
(4, 56.6, NOW() - INTERVAL '1 day'),

-- Property 5
(5, 39.7, NOW() - INTERVAL '12 days'),
(5, 48.5, NOW() - INTERVAL '11 days'),
(5, 53.2, NOW() - INTERVAL '10 days'),
(5, 44.9, NOW() - INTERVAL '9 days'),
(5, 51.5, NOW() - INTERVAL '8 days'),
(5, 59.7, NOW() - INTERVAL '7 days'),
(5, 55.4, NOW() - INTERVAL '6 days'),
(5, 50.3, NOW() - INTERVAL '5 days'),
(5, 43.9, NOW() - INTERVAL '4 days'),
(5, 57.7, NOW() - INTERVAL '3 days'),
(5, 60.2, NOW() - INTERVAL '2 days'),
(5, 58.8, NOW() - INTERVAL '1 day'),

-- Property 6
(6, 40.5, NOW() - INTERVAL '12 days'),
(6, 53.3, NOW() - INTERVAL '11 days'),
(6, 57.6, NOW() - INTERVAL '10 days'),
(6, 47.1, NOW() - INTERVAL '9 days'),
(6, 55.3, NOW() - INTERVAL '8 days'),
(6, 63.0, NOW() - INTERVAL '7 days'),
(6, 58.1, NOW() - INTERVAL '6 days'),
(6, 52.6, NOW() - INTERVAL '5 days'),
(6, 45.9, NOW() - INTERVAL '4 days'),
(6, 59.8, NOW() - INTERVAL '3 days'),
(6, 63.4, NOW() - INTERVAL '2 days'),
(6, 57.3, NOW() - INTERVAL '1 day'),

-- Property 7
(7, 41.9, NOW() - INTERVAL '12 days'),
(7, 50.4, NOW() - INTERVAL '11 days'),
(7, 54.2, NOW() - INTERVAL '10 days'),
(7, 48.3, NOW() - INTERVAL '9 days'),
(7, 56.1, NOW() - INTERVAL '8 days'),
(7, 62.6, NOW() - INTERVAL '7 days'),
(7, 57.2, NOW() - INTERVAL '6 days'),
(7, 51.5, NOW() - INTERVAL '5 days'),
(7, 46.3, NOW() - INTERVAL '4 days'),
(7, 58.5, NOW() - INTERVAL '3 days'),
(7, 61.7, NOW() - INTERVAL '2 days'),
(7, 59.4, NOW() - INTERVAL '1 day'),

-- Property 8
(8, 37.6, NOW() - INTERVAL '12 days'),
(8, 49.9, NOW() - INTERVAL '11 days'),
(8, 55.4, NOW() - INTERVAL '10 days'),
(8, 46.8, NOW() - INTERVAL '9 days'),
(8, 53.1, NOW() - INTERVAL '8 days'),
(8, 60.8, NOW() - INTERVAL '7 days'),
(8, 56.4, NOW() - INTERVAL '6 days'),
(8, 51.0, NOW() - INTERVAL '5 days'),
(8, 44.1, NOW() - INTERVAL '4 days'),
(8, 57.6, NOW() - INTERVAL '3 days'),
(8, 60.1, NOW() - INTERVAL '2 days'),
(8, 58.2, NOW() - INTERVAL '1 day'),

-- Property 9
(9, 43.1, NOW() - INTERVAL '12 days'),
(9, 51.8, NOW() - INTERVAL '11 days'),
(9, 57.0, NOW() - INTERVAL '10 days'),
(9, 47.6, NOW() - INTERVAL '9 days'),
(9, 54.9, NOW() - INTERVAL '8 days'),
(9, 63.2, NOW() - INTERVAL '7 days'),
(9, 58.9, NOW() - INTERVAL '6 days'),
(9, 52.1, NOW() - INTERVAL '5 days'),
(9, 47.0, NOW() - INTERVAL '4 days'),
(9, 59.1, NOW() - INTERVAL '3 days'),
(9, 62.4, NOW() - INTERVAL '2 days'),
(9, 57.9, NOW() - INTERVAL '1 day'),

-- Property 10
(10, 39.3, NOW() - INTERVAL '12 days'),
(10, 48.7, NOW() - INTERVAL '11 days'),
(10, 54.6, NOW() - INTERVAL '10 days'),
(10, 46.2, NOW() - INTERVAL '9 days'),
(10, 52.8, NOW() - INTERVAL '8 days'),
(10, 60.0, NOW() - INTERVAL '7 days'),
(10, 56.1, NOW() - INTERVAL '6 days'),
(10, 50.8, NOW() - INTERVAL '5 days'),
(10, 44.6, NOW() - INTERVAL '4 days'),
(10, 57.3, NOW() - INTERVAL '3 days'),
(10, 59.9, NOW() - INTERVAL '2 days'),
(10, 58.4, NOW() - INTERVAL '1 day'),

-- Property 11
(11, 40.8, NOW() - INTERVAL '12 days'),
(11, 52.5, NOW() - INTERVAL '11 days'),
(11, 58.3, NOW() - INTERVAL '10 days'),
(11, 47.9, NOW() - INTERVAL '9 days'),
(11, 55.6, NOW() - INTERVAL '8 days'),
(11, 62.9, NOW() - INTERVAL '7 days'),
(11, 57.7, NOW() - INTERVAL '6 days'),
(11, 51.8, NOW() - INTERVAL '5 days'),
(11, 46.1, NOW() - INTERVAL '4 days'),
(11, 58.8, NOW() - INTERVAL '3 days'),
(11, 61.3, NOW() - INTERVAL '2 days'),
(11, 59.5, NOW() - INTERVAL '1 day');

*/

export default function ReadingsPage() {
  const qc = useQueryClient();

  const { data = [], isLoading } = useQuery({
    queryKey: ["readings"],
    queryFn: async () => {
      const res = await fetch("/api/readings");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading…</p>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Readings</h1>
      </div>

      <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
        <table className="w-full text-sm">
          <thead className="text-neutral-400 border-b border-neutral-700">
            <tr>
              <th className="py-2 text-left">ID</th>
              <th className="py-2 text-left">Value</th>
              <th className="py-2 text-left">Property</th>
              <th className="py-2 text-left">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r: any) => (
              <tr key={r.readings.id} className="border-b border-neutral-800">
                <td className="py-2">{r.readings.id}</td>
                <td>{r.readings.value.toFixed(2)}</td>
                <td>{r.properties.name}</td>
                <td>{new Date(r.readings.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
