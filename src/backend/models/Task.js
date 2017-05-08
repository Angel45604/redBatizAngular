var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Task = sequelize.define('tabletest1',{
        publicator:{
            type: DataTypes.STRING
        },
        publicationGroup:{
            type: DataTypes.STRING
        },
        publicationAssignature: {
            type: DataTypes.STRING
        },
        publicationText:{
            type: DataTypes.STRING
        }
    });
    return Task;
};