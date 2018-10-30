var fs = require("fs");
var http = require("http");

http.createServer(function (req,res) {
    if (req.url == "/index") {
        res.setHeader("Content-Type","text/html;charset=utf-8");
        fs.readFile("./resources/index.html",function (err,data) {
            if (err) {
                res.end("<h2>文件读取失败！</h2>");
            } else {
                res.end(data);
            }
        });
    } else if (req.url == "/feng") {
        fs.readFile("./resources/feng.jpg",function (err,data) {
            if (err) {
                res.setHeader("Content-Type","text/html;charset=utf-8");
                res.end("<h2>文件读取失败！</h2>");
            } else {
                res.setHeader("Content-Type","image/jpeg");
                res.end(data);
            }
        });
    }
}).listen(3000);