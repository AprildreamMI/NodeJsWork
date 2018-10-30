var express = require('express');
var fs = require('fs');
var router = require('./router');
var body = require('body-parser');

var app = express();

// 配置中间件
app.use(body.urlencoded({ extended: false }));

// parse application/json
app.use(body.json());

//模板引擎配置
app.engine('html',require('express-art-template'));

//开放资源文件夹
app.use('/public/',express.static('./public'));
app.use('/node_modules/',express.static('./node_modules/'));

// 把路由挂在在app.js上
app.use(router);

app.listen(3000,function () {
    console.log('服务正常启动.......');
})