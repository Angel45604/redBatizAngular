var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const Relation = sequelize.define('Rel_User_Admin',{
        idUser:{
            type:DataTypes.STRING,
            //  references:{
            //     model:"User",
            //     key:"id"
            // }
        },
        idRelation:{
            type:DataTypes.STRING,
            //  references:{
            //     model:"Rel_Depto_Pue",
            //     key:"id"
            // }
        }
    });
    return Relation;
};