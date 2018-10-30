var mongoos = require('mongoose');

var Schema = mongoos.Schema;

//连接数据库，动态创建
mongoos.connect('mongodb://localhost/dem01');

//设计集合结构
var userSchema = new Schema({
    userName: {
        type: String,   //类型
        required: true  //是不是必须的
    },
    userPassword: {
        type: String,
        required: true
    },
    emaill: {
        type:String   //并不是必须的
    }
});

// 新建一个集合，集合名为users ， 集合结构为上定义的结构
var User = mongoos.model('User',userSchema);

// 增加数据
/*var admin = new User({
    userName:"张三",
    userPassword:"asdzxc456",
    emaill:"magicwingzs@qq.com"
});


admin.save(function (err,ret) {
    if (err) {
        console.log("保存失败");
    } else {
        console.log("保存成功");
        console.log(ret);
    }
});*/

// 查询数据
User.find(function (err,ret) {
    if (err) {
        console.log("查询失败！");
    } else {
        console.log("查询成功！");
        // 查询最后的是一个对象
        console.log(ret);
    }
});

//删除数据
/*User.remove({
    userName:"张三"
},function (err,ret) {
    if (err) {
        console.log("删除失败！");
    } else {
        console.log("删除成功！");
        console.log(ret);
    }
});*/

//更新数据
/*User.findByIdAndUpdate('5bcc742cdc3e45359402a062',{
    userPassword:"asdzxc456789"
},function (err,ret) {
    if (err) {
        console.log("更新失败！");
    } else {
        console.log("更新成功！");
        console.log(ret);
    }
})*/




