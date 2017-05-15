var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Puestos = sequelize.define('Cat_Puestos',{
        DescripcionPue:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Puestos;
};