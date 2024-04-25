const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req, res) => {
  if(req.url==='/favicon.ico') return res.end();
  const log = `${Date.now()}: ${req.url} New Request Received\n`;
  const myUrl = url.parse(req.url)

  console.log(myUrl.pathname);
  

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("I am Prince Singh Rajput");
        break;
      case "/contact":
        res.end("Contact Page");
        break;
      default:
        res.end("404 Page Not Found");
    }
  });

  console.log("New Request Received!");
});

myServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
