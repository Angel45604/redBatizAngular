var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Materias = sequelize.define('Materias',{
        Materia:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Materias;
};