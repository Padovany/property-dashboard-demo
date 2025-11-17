import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

// Add connection string to .env.local file on root
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
client.connect();

export const db = drizzle(client);
