var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const  Rel_Depto_Pue = sequelize.define('Rel_Depto_Pue',{
        Iddepto:{
            type:DataTypes.STRING,
            allowNull:false
        },
        IdPuesto:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Rel_Depto_Pue;
};