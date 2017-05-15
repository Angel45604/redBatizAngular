var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Teacher = sequelize.define('Teacher',{
        Idpersona: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        gruposprof: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Teacher;
};