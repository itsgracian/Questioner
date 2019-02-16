import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import path from "path";
import cors from "cors";
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
app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods','POST,GET,PUT,PATCH,DELETE,OPTIONS");
//   next();
// });
//@bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Provide access to node_modules folder
//app.use('/scripts', express.static(`${__dirname}/node_modules/`));
//@static folder
app.use("/images/", express.static(path.join(__dirname, "server/public/uploads")));
//app.use(express.static(path.join(__dirname, "server/public")));
app.use(express.static(path.join(__dirname, "frontend")));

//@router configuration
app.use("/", indexRoutes);
app.use("/api/v1/", authRoutes);
app.use("/api/v1/", userRoutes);
//@redirect all traffic to frontend directory
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "frontend/index.html"));
});
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
