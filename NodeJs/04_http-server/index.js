const http = require('http');


const myServer = http.createServer((req, res) => {
    console.log(req);

    res.end("You're connected with Server!")
})


myServer.listen(8000,()=>{
    console.log("Server is running on port 8000");
})



