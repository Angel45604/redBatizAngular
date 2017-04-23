var db=require('../dbconnection');

var Task={

    getAllTasks:function(callback){

    return db.query("SELECT * FROM tabletest1",callback);

    },
    getTaskById:function(id,callback){

        return db.query("SELECT * FROM tabletest1 WHERE id=?",[id],callback);
    },
    addTask:function(Task,callback){
    console.log("inside service");
    console.log(Task.Id);
    return db.query("INSERT INTO tabletest1(publicator,publicationDate,publicationText) values(?,?,?)",[Task.publicator,Task.publicationDate,Task.publicationText],callback);
    //return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
    },
    deleteTask:function(id,callback){
        return db.query("DELETE FROM tabletest1 WHERE id=?",[id],callback);
    },
    updateTask:function(id,Task,callback){
        return  db.query("UPDATE tabletest1 SET publicator=?,publicationDate=?, publicationText=? WHERE id=?",[Task.publicator,Task.publicationDate, Task.publicationText,id],callback);
    },
    deleteAll:function(item,callback){

    var delarr=[];
    for(i=0;i<item.length;i++){

        delarr[i]=item[i].Id;
    }
    return db.query("DELETE FROM tabletest1 WHERE id in (?)",[delarr],callback);
    }
};
module.exports=Task;