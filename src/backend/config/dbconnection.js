'use strict'

const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize("test1", "root", "n0m3l0", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  define: {
    underscored: true
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.tasks = require('../models/Task.js')(sequelize, Sequelize);
db.roles = require('../models/Roles.js')(sequelize, Sequelize);
db.users = require('../models/User.js')(sequelize, Sequelize);
db.groups = require('../models/Groups.js')(sequelize, Sequelize);
db.Cat_Academys = require('../models/Cat_Academy.js')(sequelize, Sequelize);
db.Materiass = require('../models/Materias.js')(sequelize, Sequelize);
db.Rel_Usser_Materias = require('../models/Rel_Usser_Materia.js')(sequelize, Sequelize);
db.Relation_Mat_Academys = require('../models/Relation_Mat_Academy.js')(sequelize, Sequelize);
db.Students = require('../models/Student.js')(sequelize, Sequelize);
db.RELuser_rol = require('../models/RELuser-rol.js')(sequelize, Sequelize);
db.Rel_Depto_Pue = require('../models/Rel_Depto_Pue.js')(sequelize, Sequelize);
db.Rel_User_Admin = require('../models/Rel_User_Admin.js')(sequelize, Sequelize);
db.Cat_Deptos = require('../models/Cat_Deptos.js')(sequelize, Sequelize);
db.Cat_Puesto= require('../models/Cat_Puestos.js')(sequelize, Sequelize);







db.groups.sync({force:false}).then(function(){
  return db.groups.bulkCreate([
    {group:'1IM1'},
    {group:'1IM2'},
    {group:'1IM3'},
    {group:'1IM4'},
    {group:'1IM5'},
    {group:'1IM6'},
    {group:'1IM7'},
    {group:'1IM8'},
    {group:'1IM9'},
    {group:'2IM1'},
    {group:'2IM2'},
    {group:'2IM3'},
    {group:'2IM4'},
    {group:'2IM5'},
    {group:'2IM6'},
    {group:'2IM7'},
    {group:'2IM8'},
    {group:'2IM9'},
    {group:'3IM1'},
    {group:'3IM2'},
    {group:'3IM3'},
    {group:'3IM4'},
    {group:'3IM5'},
    {group:'3IM6'},
    {group:'3IM7'},
    {group:'3IM8'},
    {group:'3IM9'},
    {group:'4IM1'},
    {group:'4IM2'},
    {group:'4IM3'},
    {group:'4IM4'},
    {group:'4IM5'},
    {group:'4IM6'},
    {group:'4IM7'},
    {group:'4IM8'},
    {group:'4IM9'},
    {group:'5IM1'},
    {group:'5IM2'},
    {group:'5IM3'},
    {group:'5IM4'},
    {group:'5IM5'},
    {group:'5IM6'},
    {group:'5IM7'},
    {group:'5IM8'},
    {group:'5IM9'},
    {group:'6IM1'},
    {group:'6IM2'},
    {group:'6IM3'},
    {group:'6IM4'},
    {group:'6IM5'},
    {group:'6IM6'},
    {group:'6IM7'},
    {group:'6IM8'},
    {group:'6IM9'},
    {group:'1IV1'},
    {group:'1IV2'},
    {group:'1IV3'},
    {group:'1IV4'},
    {group:'1IV5'},
    {group:'1IV6'},
    {group:'1IV7'},
    {group:'1IV8'},
    {group:'1IV9'},
    {group:'2IV1'},
    {group:'2IV2'},
    {group:'2IV3'},
    {group:'2IV4'},
    {group:'2IV5'},
    {group:'2IV6'},
    {group:'2IV7'},
    {group:'2IV8'},
    {group:'2IV9'},
    {group:'3IV1'},
    {group:'3IV2'},
    {group:'3IV3'},
    {group:'3IV4'},
    {group:'3IV5'},
    {group:'3IV6'},
    {group:'3IV7'},
    {group:'3IV8'},
    {group:'3IV9'},
    {group:'4IV1'},
    {group:'4IV2'},
    {group:'4IV3'},
    {group:'4IV4'},
    {group:'4IV5'},
    {group:'4IV6'},
    {group:'4IV7'},
    {group:'4IV8'},
    {group:'4IV9'},
    {group:'5IV1'},
    {group:'5IV2'},
    {group:'5IV3'},
    {group:'5IV4'},
    {group:'5IV5'},
    {group:'5IV6'},
    {group:'5IV7'},
    {group:'5IV8'},
    {group:'5IV9'},
    {group:'6IV1'},
    {group:'6IV2'},
    {group:'6IV3'},
    {group:'6IV4'},
    {group:'6IV5'},
    {group:'6IV6'},
    {group:'6IV7'},
    {group:'6IV8'},
    {group:'6IV9'}
  ]).then(function(){
    return db.groups.findAll();
  }).then(function(groups){
    console.log(groups)
  })
});

db.roles.sync({force: false}).then(function () {
  // Table created
  return db.roles.bulkCreate([
          { roleDescription: 'student'},
          { roleDescription: 'teacher'},
          { roleDescription: 'admin'}
          ]).then(function() {
            return db.roles.findAll();
            }).then(function(roles) {
              console.log(roles)
            })
});

//Relacion persona-rol
db.roles.hasMany(db.users,{foreignKey:'idRolfk', sourceKey:'id'});
db.users.belongsTo(db.roles,{foreignKey:'idRolfk', sourceKey:'id'});
//Relacion Usser-Student 
db.Students.hasone(db.users,{foreignKey:'IdUsser',sourceKey:'id'});
//Puesto Y Departamento 
db.Rel_Depto_Pue.hasone(db.Cat_Puesto,{foreignKey:'IdPuesto',sourceKey:'id'});
db.Rel_Depto_Pue.hasone(db.Cat_Deptos,{foreignKey:'Iddepto',sourceKey:'id'});
// Relacion de puesto y departamento con Usuario 
db.Rel_User_Admin.hasone(db.Rel_Depto_Pue,{foreignKey:'IdRelation',sourceKey:'id'});
db.Rel_User_Admin.hasone(db.users,{foreignKey:'IdUser',sourceKey:'id'});
//Relacion Alumno Grupo, or Student with group 
db.Students.hasone(db.groups,{foreignKey:'IdGroup',sourceKey:'id'});
db.groups.hasMany(db.Students,{foreignKey:'IdGroup',sourceKey:'id'});
//Relacion Usser Materia 
db.Rel_Usser_Materias.hasMany(db.users,{foreignKey:'IdUsser',sourceKey:'id'});
db.Rel_Usser_Materias.hasMany(db.Materiass,{foreignKey:'idMateria',sourceKey:'id'});
// Relation Materia Academy
db.Relation_Mat_Academys.hasMany(db.Materiass,{foreignKey:'idMateria',sourceKey:'id'});
db.Relation_Mat_Academys.hasone(db.Cat_Academys,{foreignKey:'idAcademy',sourceKey:'id'});

module.exports = db;
// var connection=mysql.createPool({

// host:'localhost',
// user:'root',
// password:'n0m3l0',
// database:'test1'


// });
