var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Role = sequelize.define('roleList',{
        roleDescription:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Role;
};