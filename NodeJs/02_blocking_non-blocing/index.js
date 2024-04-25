//create http server

const http = require("http");
const myServer = http.createServer((req, res) => {

    console.log(req);
    res.end("Hello From Server");
});

myServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});