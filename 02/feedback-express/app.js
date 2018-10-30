var express = require('express');
var body = require('body-parser');

var app = express();

app.engine('html',require('express-art-template'));

// 配置中间件
app.use(body.urlencoded({ extended: false }))

// parse application/json
app.use(body.json())

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

//开放目录
app.use('/public/',express.static('./public/'));


app.get('/',function (request,response) {
    response.render('index.html',{
        list:leaveList
    });
});

app.get('/post',function (request,response) {
    response.render('post.html');
});

app.post('/pinglun',function (request,response) {
    var newObject = request.body;
    console.log(request.body);
    date = new Date(Date.now());
    var time = date.getFullYear() + "年" + (date.getMonth() < 9 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)) + "月" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())+'日' ;
    newObject.dataTime = time;
    leaveList.push(newObject);
    response.redirect('/')
});

app.listen(3000,function () {
    console.log('服务器成功启动.....');
});