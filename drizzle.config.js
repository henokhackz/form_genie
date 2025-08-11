import { defineConfig } from "drizzle-kit";



console.log("Drizzle configuration loaded", process.env.NEXT_PUBLIC_DATABASE_URL_CONFIG);
export default defineConfig({
  schema: "./configs/schema.js", 
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
   url: process.env.NEXT_PUBLIC_DATABASE_URL_CONFIG || "postgres://postgres:postgres@localhost:5432/postgres",
  },
});
