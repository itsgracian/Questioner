import { Pool } from "pg";
import config from "./keys";
import dotenv from "dotenv";
dotenv.config();

//@database connection
const pool = new Pool({
   //connectionString: process.env.DATABASE_URL
  connectionString:config.databaseURI
});

module.exports=pool;
