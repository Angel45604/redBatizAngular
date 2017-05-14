var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Groups = sequelize.define('groupList',{
        group:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Groups;
};