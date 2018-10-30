var http = require("http");

var server = http.createServer();

server.on("request",function (requset,response) {
    /*response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<head><meta charset="utf-8"/></head>');*/
    response.setHeader("Content-Type","text/plain;charset=utf-8");
    if (requset.url == "/login") {
        response.write("登陆成功！！！");
    } else if (requset.url == "/index") {
        response.write("欢迎！！！");
    } else if (requset.url == "/dieilt") {
        response.write("请注册！！！");
    } else {
        var products = [
            {
                name:"iPhone x",
                price:10000
            },
            {
                name:"iPhone 5s",
                price:7000
            },{
                name:"iPhone 4s",
                price:5500
            },{
                name:"iPhone 3x",
                price:5000
            },{
                name:"iPhone 9s",
                price:90000
            }
        ]
        response.write(JSON.stringify(products));
    }
    response.end();
})

server.listen(3000,function () {
    console.log("服务器启动成功，可以进行访问！！");
})