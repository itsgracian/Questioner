import { Pool } from "pg";
import config from "./keys";
import dotenv from "dotenv";
dotenv.config();
let pool;
//@first we have to check if we are making test or we are in developing
if(process.env.NODE_ENV==="DEV"){
//@database connection
console.log(config.databaseURI);
pool = new Pool({
  //connectionString: process.env.DATABASE_URL
 connectionString:config.databaseURI
});
}
console.log(config.dbTestURI);
if(process.env.NODE_ENV==="TEST"){
  //@database connection
   pool = new Pool({
   connectionString:config.dbTestURI
  });

  }
  export default pool;

