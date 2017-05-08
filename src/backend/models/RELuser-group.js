var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const RELuser_group = sequelize.define('RELuser_group',{
        idGroup:{
            type:DataTypes.STRING,
            allowNull:false
        },
        idUser:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return RELuser_group;
};