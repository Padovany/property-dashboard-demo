import {
  pgTable,
  serial,
  integer,
  doublePrecision,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 200 }).notNull(),
});

export const readings = pgTable("readings", {
  id: serial("id").primaryKey(),
  propertyId: integer("property_id")
    .notNull()
    .references(() => properties.id),
  value: doublePrecision("value").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// TODO: Add consumption table, for this demo we're using only readings (consumption uses mock data)