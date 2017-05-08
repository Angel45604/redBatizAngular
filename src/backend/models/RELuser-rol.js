var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const RELuser_rol = sequelize.define('RELuser_rol',{
        idRole:{
            type:DataTypes.STRING,
            allowNull:false
        },
        idUser:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return RELuser_rol;
};