const http = require("http");
// const module = require('request');
const fs = require("fs");

const homePage = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/data") {
    res.write("[1, 2, 3, 4]");
    res.end();
    return;
  }
  if (req.url === "/") {
    res.write(homePage);
    res.end();
    return;
  }
  // res.write("hello world node.js");
  // res.end();
});

server.listen(3000);
