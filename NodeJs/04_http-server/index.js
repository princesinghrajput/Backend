const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res)=> {
    console.log(req.url);

    if (req.url == '/favicon.ico') return res.end("");

    const log = `${Date.now()}  ${req.method} ${req.url} New request received \n `

    const myUrl = url.parse(req.url, true)

    console.log("name",myUrl);


    //     /about   "About me"
    //     /contact "Contact me

    fs.appendFile('log.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("You're on the home page");

                break;

            case "/about":

                res.end(`Hey ${myUrl.query.name} ! welcome to the About Page`);
                break;

            case "/contact":
                res.end("You're on the contact page");
                break;

            default:
                res.end("You're connected with Server!");

                break;
        }


    })


})

myServer.listen(8000, () => {
    console.log("Server is running on port 8000");
})




