const http = require("http");
const app = require("./app");
//@setup server port number
const port = process.env.PORT || 5000;

const server = http.createServer(app);

//@setting server listening port
server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
