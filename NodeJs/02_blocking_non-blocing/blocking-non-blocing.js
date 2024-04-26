const fs = require("fs");



console.log("1");



// ! Sync... Blocking
const result = fs.readFileSync("contacts.txt", "utf-8");
console.log(result);

console.log("2");

// // ! Async..... Non-blocking

// console.log("1");
// console.log("2");
// fs.readFile("contacts.txt", "utf-8", (error, result) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log(result);
// });

// console.log("3");

// console.log("4");


// // ? Default Thread Pool Size = 4
// // ? Max  ? - 8 core cpu - 8


const os = require("os");

console.log(os.cpus().length);