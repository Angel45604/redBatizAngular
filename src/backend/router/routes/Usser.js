
'use strict';

module.exports = (app, db) => {

    //db.Students = require('../../models/Student.js')(db.sequelize, db.Sequelize);

  // Alumnos de un grupo
  app.get('/User/:group', (req, res) => {
    const group= req.params.group;
    db.groups.find({
      where: { group:group},
      attributes: ['group']
    })
      .then(groups=> {
        res.json(groups);
      });
  });






};
