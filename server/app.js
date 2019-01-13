const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//@router
const userRouter = require("./router/userRoutes");
const adminRouter = require("./router/adminRoutes");
//@setting app
const app = express();

//@public folder
app.use(express.static(path.join(__dirname, "public")));
//@bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//handiling and preventing CORS Error
app.use((req, res, next) => {
  //providing my api to everyone
  res.header("Access-Control-Allow-Origin", "*");
  //allow access
  res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization");
  //access which is allowed
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,PATCH,DELETE");
    return res.status(200).json({});
  }
  next();
  return false;
});
//@router setup
app.use("/api/v1", userRouter);
app.use("/api/v1", adminRouter);



module.exports = app;
