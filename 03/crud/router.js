var fs = require('fs');
var express = require('express');
var router = express.Router();
var studentsApi = require('./students');


router.get('/students',function (req,res) {
    /*fs.readFile('./db.json','utf8',function (err,data) {
        if (err) {
            return res.statusCode(500).send("server err");
        } else {
            res.render('index.html',{
                studentList:JSON.parse(data).student
            });
        }
    })*/
    studentsApi.find(function (err,data) {
        if (err) {
            return res.statusCode(500).send("server err");
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
            return res.statusCode(500).send('添加失败');
        } else {
            res.redirect('/students');
        }
    });
});


router.get('/updateStudent',function (req,res) {
    studentsApi.findById(parseInt(req.query.id),function (err,student) {
        if (err) {
            return res.statusCode(500).send('server db err');
        } else {
            res.render('updateStudent.html',student);
        }
    });
});

router.post('/updateStudent',function (req,res) {
    req.body.id = parseInt(req.body.id);
    studentsApi.update(req.body,function (err) {
        if (err) {
            return res.statusCode(500).send('更新失败');
        } else {
            res.redirect('/students');
        }
    });
});

router.get('/delete',function (req,res) {
    console.log(req.query.id);
    studentsApi.delete(req.query.id,function (err) {
        if (err) {
            return res.statusCode(500).send('删除失败');
        } else {
            res.redirect('/students');
        }
    })
})

module.exports = router;