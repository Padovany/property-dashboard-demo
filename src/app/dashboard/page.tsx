"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

// Dummy data for charts
const consumptionData = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 140 },
  { month: "Mar", value: 135 },
  { month: "Apr", value: 160 },
  { month: "May", value: 150 },
];

const costData = [
  { month: "Jan", value: 200 },
  { month: "Feb", value: 240 },
  { month: "Mar", value: 230 },
  { month: "Apr", value: 260 },
  { month: "May", value: 255 },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-6 p-6 text-gray-200">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold"
      >
        Dashboard Overview
      </motion.h1>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Consumption Chart */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-gray-100">Monthly Consumption</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart width={500} height={260} data={consumptionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip contentStyle={{ background: "#1a1a1a", border: "1px solid #333" }} />
                <Line type="monotone" dataKey="value" stroke="#7dd3fc" strokeWidth={3} />
              </LineChart>
            </CardContent>
          </Card>
        </motion.div>

        {/* Cost Chart */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-gray-100">Monthly Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart width={500} height={260} data={costData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip contentStyle={{ background: "#1a1a1a", border: "1px solid #333" }} />
                <Bar dataKey="value" fill="#c084fc" />
              </BarChart>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* TABLE */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-gray-100">Recent Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-left border-collapse text-gray-300">
              <thead>
                <tr className="border-b border-neutral-700 text-gray-400">
                  <th className="py-2">Date</th>
                  <th className="py-2">Meter</th>
                  <th className="py-2">Value</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((i) => (
                  <tr key={i} className="border-b border-neutral-800 hover:bg-neutral-800/50">
                    <td className="py-2">2025-01-0{i}</td>
                    <td className="py-2">Main</td>
                    <td className="py-2">{100 + i * 5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}