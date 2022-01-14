const http = require("http");
const { getRouter } = require("./router");
const { DATABASE } = process.env;
const hostname = "127.0.0.1";
const port = 8000;

//connect mongoose
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://set2021_tuphuc:hello@cluster0.vbssm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

let connectionDB = mongoose.connection;

connectionDB.on("error", function (err) {
  if (err) {
    console.log("Connect DB failed");
  }
});

connectionDB.on("connected", function () {
  console.log("Connect DB successfully");
});

connectionDB.on("disconnected", function () {
  console.log("Connect DB failed");
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
