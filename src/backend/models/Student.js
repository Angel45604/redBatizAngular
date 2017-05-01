// var db=require('../dbconnection');
// var fs = require('fs');
// var Student={
//     deleteStudent:function(Student,callback){
//         var path='./public'+Student.student_img;
//         fs.unlink(path,function(err){
//             if(err){
//                 console.log(err);
//             }
//             console.log('Deleted successfuly')});
//         return db.query("DELETE FROM student_tbl WHERE id=?",[Student.id],callback);        
//     },
//     addStudent:function(Student,callback){
//         var dt=new Date();//current time
//         var text = "IN PROGRESS";//random text

//         var base64d=Student.student_img.replace(/^data:image\/png;base64,/, "");
//         var path="./public/images/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
//         var path1="/images/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
//         fs.writeFile(path,base64d,'base64',function(err){
//             if(err) {
//                 return console.log(err);
//             }
//             console.log("The file was saved!");
//         });

//         return db.query("INSERT INTO student_tbl(name,mobile,path1) VALUES(?,?,?)",[,Student.name,Student.mobile,path1],callback);
//     }
// };
// module.exports=Student;