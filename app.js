import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import passportAuth from "./server/config/passport";

//@router
import authRoutes from "./server/router/api/authRoute";
import userRoutes from "./server/router/api/userRoutes";
import indexRoutes from "./server/router/indexRoutes";
//run database
import Run from "./server/config/dbRun";
dotenv.config();

//@express server
const app = express();
//@cors middleware
app.use(cors());
//@bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
passportAuth(passport);
//@Error handling
app.use((req, res, next) => {
  const error = new Error("Sorry request not  found");
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
});
//@populate
export default app;
