var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Relation = sequelize.define('Rel_User_Admin',{
        IdUser:{
            type:DataTypes.STRING,
            allowNull:false
        },
        IdRelation:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Relation;
};