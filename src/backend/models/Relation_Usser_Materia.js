var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const RelationUsserMateria = sequelize.define('RelationUsserMateria',{
        IdMateria:{
            type:DataTypes.STRING,
            allowNull:false
        },
        IdUsser:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return RelationUsserMateria;
};