var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Rel_Usser_Materia = sequelize.define('Rel_Usser_Materia',{
        idMateria:{
            type:DataTypes.STRING,
            allowNull:false
        },
         idUser:{
            type:DataTypes.STRING,
            allowNull:false
        }

    });
    return Rel_Usser_Materia;
};