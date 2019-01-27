import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import path from "path";
import dotenv from "dotenv";
//import data from "./server/config/db";
dotenv.config();

//@router
import authRoutes from "./server/router/api/authRoute";
import userRoutes from "./server/router/api/userRoutes";
import indexRoutes from "./server/router/indexRoutes";


//@express server
const app = express();
//@cors middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods','POST,GET,PUT,PATCH,DELETE,OPTIONS");
  next();
});
//@view engine for API Reference
app.set("view engine","pug");
app.set("views",path.join(__dirname,"server/views"));
//@bodyParser
app.use(bodyParser.json());
//@static folder
app.use("/images/", express.static(path.join(__dirname, "server/public/uploads")));
app.use(express.static(path.join(__dirname,"server/public")));
//@router configuration
app.use("/",indexRoutes);
app.use("/api/v1/", authRoutes);
app.use("/api/v1/", userRoutes);

//@passport middleware
app.use(passport.initialize());
require("./server/config/passport")(passport);

//@router GET
//@desc api

//@populate
export default app;
