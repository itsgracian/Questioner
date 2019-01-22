import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import path from "path";
//@router
import authRoutes from "./server/router/api/authRoute";
import userRoutes from "./server/router/api/userRoutes";

//@express server
const app = express();
//@cors middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods','POST,GET,PUT,PATCH,DELETE,OPTIONS");
  next();
});
//@bodyParser
app.use(bodyParser.json());
//@static folder
app.use("/images/", express.static(path.join(__dirname, "public/uploads")));
//@router configuration
app.use("/api/v1/", authRoutes);
app.use("/api/v1/", userRoutes);

//@passport middleware
app.use(passport.initialize());
require("./server/config/passport")(passport);

//@populate
export default app;
