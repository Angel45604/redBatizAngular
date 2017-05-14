var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Cat_Academy = sequelize.define('Cat_Academy',{
        Academy:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Cat_Academy;
};