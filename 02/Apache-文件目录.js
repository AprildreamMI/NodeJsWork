var fs = require("fs");
var template = require('art-template')
var http = require("http");

var RoowUrl = 'C:/Users/Shinelon/Documents/HBuilderProject/www';
http.createServer(function (req,res) {
    fs.readFile('./template.html',function (err,data) {
        if (err) {
            res.end('error 404!!!');
            return;
        } else {
            fs.readdir(RoowUrl,function (err,files) {
                if (err) {
                    res.end('error 404!!!');
                    return;
                } else {
                    data = template.render(data.toString(),{
                        files:files
                    })
                    res.end(data);
                }
            })
        }
    })

}).listen(3000);
