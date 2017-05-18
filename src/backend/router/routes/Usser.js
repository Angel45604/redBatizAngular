
'use strict';

module.exports = (app, db) => {

    db.Usuarios = require('../../models/Usuario.js')(db.sequelize, db.Sequelize);
     //db.Students = require('../../models/Student.js')(db.sequelize, db.Sequelize);

  // Alumnos de un grupo
 /* app.get('/User/:group', (req, res) => {
    const group= req.params.group;
    db.groups.find({
      where: { group:group},
      attributes: ['group']
    })
      .then(groups=> {
        res.json(groups);
      });
  });*/

//Obtener todos los grupos de un profesor
app.get('/Usuarios/:group/:maestroname/:maestroap/:maestroam', (req, res) => {
    const group= req.params.group;
     const maestroname= req.params.maestroname;
     const maestroap= req.params.maestroap;
     const maestroam= req.params.maestroam;
     db.Usuarios.find({
      where: { 
        group:group,
        maestroname:maestroname,
        maestroam:maestroam,
        maestroap:maestroap

      },
      attributes: [
        [sequelize.fn('DISTINTIC', sequelize.col('grupo'))]]
    })
      .then(Usuarios=> {
        res.json(Usuarios);
      });
  });




};
