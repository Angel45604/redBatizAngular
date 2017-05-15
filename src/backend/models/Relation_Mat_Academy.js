var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Rel_Mat_Academy = sequelize.define('Rel_Mat_Academy',{
        idMateria:{
            type:DataTypes.STRING,
             references:{
                model:"Materias",
                key:"id"
            }
        },
         idAcademy:{
            type:DataTypes.STRING,
             references:{
                model:"Cat_Academy",
                key:"id"
            }
        }

    });
    return Rel_Mat_Academy;
};