var fs = require("fs");

fs.readFile("./file/data.txt",function (error,data) {
    console.log(data.toString());
})