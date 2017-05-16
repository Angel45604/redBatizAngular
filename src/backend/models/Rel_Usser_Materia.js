var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Rel_Usser_Materia = sequelize.define('Rel_Usser_Materia',{
        idMateria:{
            type:DataTypes.STRING,
            //  references:{
            //     model:"Materias",
            //     key:"id"
            // }
        },
         idUser:{
            type:DataTypes.STRING,
            //  references:{
            //     model:"User",
            //     key:"id"
            // }
        }

    });
    return Rel_Usser_Materia;
};