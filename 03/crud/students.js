var fs = require('fs');
const dbPath = './db.json';

// 查询全部
exports.find = function (callback) {
    fs.readFile(dbPath,function (err,data) {
        if (err) {
            return callback(err)
        } else {
            callback(null,JSON.parse(data).student);
        }
    });
}

//通过ID查询单个学生
exports.findById = function(id,callback) {
    fs.readFile(dbPath,function (err,data) {
        if (err) {
            return callback(err)
        } else {
            var students = JSON.parse(data).student;
            var student = students.find(function (item) {
                return item.id === id;
            });
            callback(null,student);
        }
    });
}

// 添加学生
exports.save = function (newStudent,callback) {
    fs.readFile(dbPath,function (err,data) {
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
    });
}

exports.update = function (oldStudent,callback) {
    fs.readFile(dbPath,function (err,data) {
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
    });
}

exports.delete = function (id,callback) {
    fs.readFile(dbPath,function (err,data) {
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
    });
}

Array.prototype.remove = function (dx)
{
    if(isNaN(dx)||dx>this.length){return false;}
    for(var i=0,n=0;i<this.length;i++)
    {
        if(this[i]!=this[dx])
        {
            this[n++]=this[i]
        }
    }
    this.length-=1
}