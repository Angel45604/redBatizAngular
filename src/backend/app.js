var express = require('express');
var bodyParser = require('body-parser');
var cors = require("cors");
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

connection.query("INSERT INTO tabletest1(nombre,appe) VALUES ('Hola2','Pablo2');",function(err,rows,fields){
    if(!err){
        console.log('The solution is: ' + rows);
    }else{
        console.log('Error while performing Query.');
    }
});

connection.query('SELECT * from tabletest1',function(err,rows,fields){
    if(!err){
        console.log('The solution is: ' + rows[0].id);
    }else{
        console.log('Error while performing Query.');
    }
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.options("*",cors());

var routes = express.Router();

var port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log("Listening port",port);
});