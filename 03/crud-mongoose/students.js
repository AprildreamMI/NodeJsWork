var fs = require('fs');
var mongoose = require('mongoose');
const dbPath = './db.json';

var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/student');

var studentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    hobbies:{
        type:String,
        required:true
    }
});

var Student = mongoose.model('Student',studentSchema);


// 查询全部
exports.find = function (callback) {
    /*fs.readFile(dbPath,function (err,data) {
        if (err) {
            return callback(err)
        } else {
            callback(null,JSON.parse(data).student);
        }
    });*/
    Student.find(function (err,ret) {
        if (err) {
            return callback(err);
        } else {
            callback(null,ret);
        }
    })
}

//通过ID查询单个学生
exports.findById = function(id,callback) {
    /*fs.readFile(dbPath,function (err,data) {
        if (err) {
            return callback(err)
        } else {
            var students = JSON.parse(data).student;
            var student = students.find(function (item) {
                return item.id === id;
            });
            callback(null,student);
        }
    });*/
    Student.findById(id,function (err,ret) {
        if (err) {
            console.log(err);
            return callback(err);
        } else {
            return callback(null,ret);
        }
    })
}

// 添加学生
exports.save = function (newStudent,callback) {
    /*fs.readFile(dbPath,function (err,data) {
        if (err) {
            return callback(err)
        } else {
            var students = JSON.parse(data).student;
            var id = students[students.length-1].id + 1;
            newStudent.id = id;
            students.push(newStudent);
            //因为student在db.json 文件里，是一个对象
            let fileData = JSON.stringify({
                student:students
            });
            fs.writeFile(dbPath,fileData,function (err,data) {
                if (err) {
                    return callback(err);
                } else {
                    return callback(null);
                }
            });
        }
    });*/
    var student = new Student(newStudent);
    student.save(function (err,ret) {
        if (err) {
            return callback(err);
        } else {
            return callback(null);
        }
    })
}

//更新学生
exports.update = function (_id,oldStudent,callback) {
    /*fs.readFile(dbPath,function (err,data) {
        if (err) {
            return callback(err)
        } else {
            var students = JSON.parse(data).student;
            var newStudent = students.find(function (item) {
                return item.id === parseInt(oldStudent.id);
            });
            for (var key in oldStudent) {
                newStudent[key] = oldStudent[key]
            }

            //直接更新了数组里的学生对象
            let fileData = JSON.stringify({
                student:students
            });
            fs.writeFile(dbPath,fileData,function (err,data) {
                if (err) {
                    return callback(err);
                } else {
                    return callback(null);
                }
            });

        }
    });*/
    Student.findByIdAndUpdate(mongoose.Types.ObjectId(_id),oldStudent,function (err,ret) {
        if (err) {
            console.log(err);
            return callback(err);
        } else {
            return callback(null);
        }
    })
}


//删除学生
exports.delete = function (id,callback) {
    /*fs.readFile(dbPath,function (err,data) {
        if (err) {
            return callback(err)
        } else {
            var students = JSON.parse(data).student;
            var index = students.findIndex(function (item) {
                return item.id === parseInt(id);
            });
            students.splice(index,1);

            //直接更新了数组里的学生对象
            let fileData = JSON.stringify({
                student:students
            });
            fs.writeFile(dbPath,fileData,function (err,data) {
                if (err) {
                    return callback(err);
                } else {
                    return callback(null);
                }
            });
        }
    });*/
    Student.findByIdAndRemove(mongoose.Types.ObjectId(id),function (err,ret) {
        if (err) {
            return callback(err);
        } else {
            return callback(null);
        }
    })
}