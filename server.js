import http from "http";
import app from "./app";

//@setup server port number
const port = process.env.PORT || 5000;
//
app.set("port", port);

//@server creation
const server = http.createServer(app);

//@setting server listening port
server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
