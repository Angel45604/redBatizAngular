var db=require('../config/dbconnection');

module.exports=(sequelize,DataTypes) =>{
    const  Rel_Depto_Pue = sequelize.define('Rel_Depto_Pue',{
       iddepto:{
            type:DataTypes.STRING,
            // references:{
            //     model:"Cat_Depto",
            //     key:"id"
            // }
        },
         idPuesto:{
            type:DataTypes.STRING,
            // references:{
            //     model:"Cat_Puestos",
            //     key:"id"
            // }
        }
    });
    return Rel_Depto_Pue;
};