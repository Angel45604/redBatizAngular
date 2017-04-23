var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'n0m3l0',
database:'test1'


});
module.exports=connection;