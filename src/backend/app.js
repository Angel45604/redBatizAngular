var express = require('express');
var app = express();

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'n0m3l0',
    database: 'test1'
});

connection.connect(function (err){
    if(!err){
        console.log("Database connected");
    }else{
        console.log("error connecting database");
    }
});

app.get("/",function(req,res){
    connection.query('SELECT * from tabletest1',function(err,rows,fields){
        connection.end();
        if(!err){
            console.log("The solution is: ",rows);
        }else{
            console.log("Error while performing Query.");
        }
    });
});
app.listen(4200);