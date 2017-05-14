var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const  Rel_Depto_Pue = sequelize.define('Rel_Depto_Pue',{
        idDepto:{
            type:DataTypes.STRING,
            allowNull:false
        },
        idPuesto:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Rel_Depto_Pue;
};