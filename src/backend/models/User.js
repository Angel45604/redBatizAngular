var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const User = sequelize.define('users',{
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        surname:{
            type: DataTypes.STRING,
            allowNull:false
        },
        group: {
            type: DataTypes.STRING,
            allowNull:false
        }
    });
    return User;
};