var fs = require('fs');
var http = require('http');

var RoowUrl = "C:/Users/Shinelon/Documents/HBuilderProject/www";
http.createServer(function (req,res) {

    var fileUrl = null;
    if (req.url === '/') {
        fileUrl = '/index.html';
    } else {
        fileUrl = req.url;
    }
    fs.readFile(RoowUrl+fileUrl,function (err,data) {
        if (err) {
            res.end("error 404!!!");
            return;
        } else {
            res.end(data);
        }
    })
}).listen(3000);