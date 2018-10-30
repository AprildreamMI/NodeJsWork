var wr = require("fs");
wr.writeFile("file/write.txt","大家好，这是写入的文件",function (error) {
    console.log(error);
})