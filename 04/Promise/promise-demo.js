var fs = require('fs');

var p1 = new Promise(function (resolve, reject) {
    fs.readFile('./data/a.txt',function (err, data) {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});

var p2 = new Promise(function (resolve, reject) {
    fs.readFile('./data/b.txt',function (err,data) {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});

var p3 = new Promise(function (resolve, reject) {
    fs.readFile('./data/c.txt',function (err,data) {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});


p1.then(function (data) {
    console.log(data.toString());
    return p2;
},function (err) {
    console.log(err);
}).then(function (data) {
    console.log(data.toString());
    return p3;
}).then(function (data) {
    console.log(data.toString());
})