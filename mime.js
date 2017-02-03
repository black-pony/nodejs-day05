var mime = require("mime");
console.log(mime.lookup("a.txt"));
console.log(mime.lookup("1.jpg"));
console.log(mime.lookup("1.html"));
console.log(mime.lookup("1.js"));
console.log(mime.lookup("1.css"));
console.log(mime.lookup("1.gif"));
console.log(mime.lookup("1.png"));
console.log(mime.lookup("1.less"));