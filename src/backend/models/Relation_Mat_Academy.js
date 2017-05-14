var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Rel_Mat_Academy = sequelize.define('Rel_Mat_Academy',{
        IdMateria:{
            type:DataTypes.STRING,
            allowNull:false
        },
         IdAcademy:{
            type:DataTypes.STRING,
            allowNull:false
        }

    });
    return Rel_Mat_Academy;
};