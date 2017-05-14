var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Rel_Usser_Materia = sequelize.define('Rel_Usser_Materia',{
        IdMateria:{
            type:DataTypes.STRING,
            allowNull:false
        },
         IdUsser:{
            type:DataTypes.STRING,
            allowNull:false
        }

    });
    return Rel_Usser_Materia;
};