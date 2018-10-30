var fs = require('fs');
var http = require('http');
var template = require('art-template');
var ulrPase = require('url');

var leaveList = [
    {
        name:"赵思",
        leave:"一起去吃个饭吧",
        dataTime:"2018年10月11日"
    },
    {
        name:"刘盼",
        leave:"一起去吃个饭吧",
        dataTime:"2018年10月11日"
    },
    {
        name:"刘胜",
        leave:"一起去吃个饭吧哈哈哈",
        dataTime:"2018年10月11日"
    },{
        name:"汤亮",
        leave:"一起去吃个饭吧吧",
        dataTime:"2018年10月11日"
    },{
        name:"王新翔",
        leave:"一起去吃个饭吧得得得",
        dataTime:"2018年10月11日"
    },
    {
        name:"赵思",
        leave:"一起去吃个饭吧",
        dataTime:"2018年10月11日"
    }
]


http.createServer(function (res,req) {
     var urlBoject = ulrPase.parse(res.url,true);

    if (urlBoject.pathname == '/' ) {
        fs.readFile('./view/index.html',function (err,data) {
            if (err) {
                req.end('ERROR 404!!!');
                return;
            } else {
                var data = template.render(data.toString(),{list:leaveList});
                req.end(data);
            }
        });
    } else if (urlBoject.pathname.indexOf('/public/') === 0) {
        fs.readFile('.'+res.url,function (err,data) {
            if (err) {
                req.end('ERROR 404!!!');
                return;
            } else {
                req.end(data);
            }
        });
    } else if (urlBoject.pathname === '/post') {
        fs.readFile('./view/post.html',function (err,data) {
            if (err) {
                req.end('ERROR 404!!!');
                return;
            } else {
                req.end(data);
            }
        });
    } else if (urlBoject.pathname === '/pinglun') {
        var newObject = urlBoject.query;
        date = new Date(Date.now());
        var time = date.getFullYear() + "年" + (date.getMonth() < 9 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)) + "月" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())+'日' ;
        newObject.dataTime = time;
        leaveList.push(newObject);
        req.statusCode='302';
        req.setHeader('Location','/');
        req.end();
    } else {
        fs.readFile('./view/404.html',function (err,data) {
            if (err) {
                req.end('ERROR 404!!!');
                return;
            } else {
                req.end(data);
            }
        });
    }

}).listen(3000,function () {
    console.log('服务器成功启动.....');
})