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
db.users = require('../models/User.js')(sequelize, Sequelize);

module.exports = db;
// var connection=mysql.createPool({

// host:'localhost',
// user:'root',
// password:'n0m3l0',
// database:'test1'


// });
