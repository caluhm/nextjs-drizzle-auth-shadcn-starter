import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

const connection = connect({
  url: process.env.DATABASE_URL as string,
});

export const db = drizzle(connection);
export type DbClient = typeof db;
