import { Pool } from "pg";
import config from "./keys";

//@database connection
const pool = new Pool({
  connectionString: config.databaseURI
});

module.exports=pool;
