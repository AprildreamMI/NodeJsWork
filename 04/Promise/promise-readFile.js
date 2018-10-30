var fs = require('fs');

function PromiseReadFile(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath,'utf8',function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

PromiseReadFile('./data/a.txt')
    .then(function (data) {
        console.log(data);
        return PromiseReadFile('./data/b.txt');
    })
    .then(function (data) {
        console.log(data);
        return PromiseReadFile('./data/c.txt');
    })
    .then(function (data) {
        console.log(data);
    });
