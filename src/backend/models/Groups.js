var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Group = sequelize.define('groupList',{
        group:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Group;
};