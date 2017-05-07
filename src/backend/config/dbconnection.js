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

db.roles.sync({force: false}).then(function () {
  // Table created
  return db.roles.bulkCreate([
          { roleDescription: 'student'},
          { roleDescription: 'teacher'},
          { roleDescription: 'admin',}
          ]).then(function() {
            return db.roles.findAll();
            }).then(function(roles) {
              console.log(roles)
            })
});


db.roles.hasMany(db.users,{foreignKey:'idRolfk', sourceKey:'id'});
db.users.belongsTo(db.roles,{foreignKey:'idRolfk', sourceKey:'id'});



module.exports = db;
// var connection=mysql.createPool({

// host:'localhost',
// user:'root',
// password:'n0m3l0',
// database:'test1'


// });
