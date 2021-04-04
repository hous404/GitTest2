const fs= require("fs");
const first= fs.readFileSync("./content/first.txt","utf-8");
console.log(first);
const third=fs.writeFileSync("./content/third.txt",`the result is ${first}`, {flag:'a'}); //the flag for append!!
console.log(third);