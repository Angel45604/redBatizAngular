var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Groups = sequelize.define('groups',{
        group:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Groups;
};