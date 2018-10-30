var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'asdzxc456',
    database:'student'
});

connection.connect();

connection.query("SELECT * FROM `s_user`",function (err,results,fields) {
    if (err){
        throw error;
    }
    console.log(results);
});

connection.end();