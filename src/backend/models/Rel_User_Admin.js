var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Relation = sequelize.define('Rel_User_Admin',{
        idUser:{
            type:DataTypes.STRING,
            allowNull:false
        },
        idRelation:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Relation;
};