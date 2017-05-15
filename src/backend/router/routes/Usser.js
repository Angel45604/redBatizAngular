
'use strict';

module.exports = (app, db) => {

    db.Teacher= require('../models/Teacher.js')(sequelize, Sequelize);
    db.Students = require('../models/Student.js')(sequelize, Sequelize);
    db.groups = require('../models/Cat_Groups.js')(sequelize, Sequelize);



    
  // GET all Materias
  app.get('/Cat_Academy', (req, res) => {
    db.Cat_Academy.findAll({
        attributes: ['Academy']
    })
      .then(Cat_Academy => {
        res.json(Cat_Academy);
      });
  });

  // GET Depto by id
  app.get('/Cat_Academy/:id', (req, res) => {
    const id = req.params.id;
    db.Cat_Academy.find({
      where: { id: id},
      attributes: ['Academy']
    })
      .then(Cat_Academy => {
        res.json(Cat_Academy);
      });
  });

};