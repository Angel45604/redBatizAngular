var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Usuarios = sequelize.define('Usuarios',{
        jefeacademianame: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jefeacademiaap: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jefeacademiaam:{
            type: DataTypes.STRING,
            allowNull:false
        },
        maestroname:{
            type: DataTypes.STRING,
            allowNull:false
        },
        maestroap: {
            type: DataTypes.STRING,
            allowNull:false
        },
        maestroam:{
            type: DataTypes.STRING,
            allowNull:false
        },
        alumnoname:{
            type: DataTypes.STRING,
            allowNull:false
        },
        alumnoap:{
            type: DataTypes.STRING,
            allowNull:false
        },
        alumnoam:{
            type: DataTypes.STRING,
            allowNull:false
        },
        grupo:{
            type: DataTypes.STRING,
            allowNull:false
        }
    });
    return Usuarios;
};

