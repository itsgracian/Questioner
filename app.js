import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import path from "path";
import dotenv from "dotenv";

//@router
import authRoutes from "./server/router/api/authRoute";
import userRoutes from "./server/router/api/userRoutes";
import indexRoutes from "./server/router/indexRoutes";
//import data from "./server/config/db";
dotenv.config();

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
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "server/views"));
//@bodyParser
app.use(bodyParser.json());
//@static folder
app.use("/images/", express.static(path.join(__dirname, "server/public/uploads")));
app.use(express.static(path.join(__dirname, "server/public")));
//@router configuration
app.use("/", indexRoutes);
app.use("/api/v1/", authRoutes);
app.use("/api/v1/", userRoutes);

//@passport middleware
app.use(passport.initialize());
require("./server/config/passport")(passport);

//@Error handling
app.use((req, res, next) => {
  var error = new Error("Sorry request not  found");
  error.status = 404;
  next(error);
});
//@handling all kind of error that comes anywhere
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
  next();
})
//@populate
export default app;
