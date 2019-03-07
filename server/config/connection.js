import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
let pool;
//@
if (process.env.NODE_ENV === "DEV") {
//@database connection
  pool = new Pool({
    connectionString: process.env.DATABASE_DEV
  });
}
////@this runs when someone is testing app using TDD
if (process.env.NODE_ENV === "TEST") {
  //@database connection
  pool = new Pool({
    connectionString: process.env.DATABASE_TEST
  });
}
export default pool;
