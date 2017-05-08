var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Task = sequelize.define('tabletest1',{
        publicator:{
            type:DataTypes.STRING
        },
        publicationAssignature:{
            type:DataTypes.DATE
        },
        publicationText:{
            type:DataTypes.STRING
        },
        publicationGroup:{
            type:DataTypes.STRING
        }
    });
    return Task;
};