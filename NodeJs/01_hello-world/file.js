const fs = require("fs");

//Sync....
// fs.writeFileSync("./test.txt", "Hello world");

//Async......
// fs.writeFile("./test.txt", "Hello world", (err)=>{})

// Sync File Reading....
// const result=fs.readFileSync('./contacts.txt', 'utf-8');
// console.log(result);

// Async File Reading....
// It doesnt return anything it accepts call back always and that's differnce
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });


//If you want to append the next in new line
//used to log the ip address and time at what they have requested in log.txt


// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString())
// fs.appendFileSync("./test.txt", `Hey there\n `);



//to copy file

fs.cpSync("./test.txt", "./copy.txt")


//to delte files
fs.unlinkSync('./copy.txt')

//to knw the statistics of a file
console.log(fs.statSync('./test.txt'));


//to create the directory

fs.mkdirSync('/my-docs')
fs.mkdirSync('my-docs/a/b',  {recursive:true})



//**********How NodeJs works */


//Sync....Blocking Requests
// fs.writeFileSync("./test.txt", "Hello world");

//Async......Non Blocking Requests
// fs.writeFile("./test.txt", "Hello world", (err)=>{})
