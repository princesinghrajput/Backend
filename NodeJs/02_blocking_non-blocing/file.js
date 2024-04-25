const fs = require("fs");

// !   Sync.... Blocking
fs.writeFileSync("./test.txt", "Hello world");

// ! Async....  Non-Blocking
fs.writeFile("./test.txt", "Hello world", (err) => {});
