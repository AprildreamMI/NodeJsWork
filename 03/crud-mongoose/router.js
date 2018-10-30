var express = require('express');
var router = express.Router();
var studentsApi = require('./students');


router.get('/students',function (req,res) {
    studentsApi.find(function (err,data) {
        if (err) {
            return res.status(500).send("server err");
        } else {
            res.render('index.html',{
                studentList:data
            });
        }
    });
});

router.get('/addStudent',function (req,res) {
    res.render('addStudent.html');
});

router.post('/addStudent',function (req,res) {
    var newStudent = req.body
    studentsApi.save(newStudent,function (err) {
        if (err) {
            return res.status(500).send('添加失败');
        } else {
            res.redirect('/students');
        }
    });
});


router.get('/updateStudent',function (req,res) {
    // 传入id的时候直接去除双引号
    studentsApi.findById(req.query._id.replace(/\"/g,''),function (err,student) {
        if (err) {
            return res.status(500).send('server db err');
        } else {
            res.render('updateStudent.html',{
                student:student
            });
        }
    });
});

router.post('/updateStudent',function (req,res) {
    // 传入的新对象里，也要去除双引号
    req.body._id = req.body._id.replace(/\"/g,'');
    studentsApi.update(req.body._id,req.body,function (err) {
        if (err) {
            return res.status(500).send('更新失败');
        } else {
            res.redirect('/students');
        }
    });
});

router.get('/delete',function (req,res) {
    studentsApi.delete(req.query.id.replace(/\"/g,''),function (err) {
        if (err) {
            return res.status(500).send('删除失败');
        } else {
            res.redirect('/students');
        }
    })
})

module.exports = router;