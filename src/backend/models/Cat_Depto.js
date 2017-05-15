var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Departaments = sequelize.define('Cat_Depto',{
        DescripcionDep:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Departaments;
};