var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const RelationUsserMateria = sequelize.define('RelationUsserMateria',{
        idMateria:{
            type:DataTypes.STRING,
            allowNull:false
        },
        idUsser:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return RelationUsserMateria;
};