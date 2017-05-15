var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const RelationUsserMateria = sequelize.define('RelationUsserMateria',{
      idMateria:{
            type:DataTypes.STRING,
            references:{
                model:"Materias",
                key:"id"
            }
        },
         idUser:{
            type:DataTypes.STRING,
             references:{
                model:"User",
                key:"id"
            }
        }
    });
    return RelationUsserMateria;
};