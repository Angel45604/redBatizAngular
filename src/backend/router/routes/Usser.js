
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
app.get('/Usuarios/:maestroname/:maestroap/:maestroam', (req, res) => {
     const maestroname= req.params.maestroname;
     const maestroap= req.params.maestroap;
     const maestroam= req.params.maestroam;
     db.Usuarios.find({
      where: { 
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

//obtener todos los alumnos del grupo de un profesor
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
      attributes: [ 'alumnoname','alumnoap','alumnoam','grupo']
    })
      .then(Usuarios=> {
        res.json(Usuarios);
      });
  });

//Obtener todos los profesores de un jefe de academia
app.get('/Usuarios/:group/:jefeacademianame/:jefeacademiaap/:jefeacademiaam', (req, res) => {
      const group= req.params.group;    
     const jefeacademianame= req.params.jefeacademianame;
     const jefeacademiaap= req.params.jefeacademiaap;
     const jefeacademiaam= req.params.jefeacademiaam;
     db.Usuarios.find({
      where: { 
        group:group,
        jefeacademianame:jefeacademianame,
        jefeacademiaam:jefeacademiaam,
        jefeacademiaap:jefeacademiaap

      },
      attributes: [
        [sequelize.fn('DISTINTIC', sequelize.col('maestroname'))],
        [sequelize.fn('DISTINTIC', sequelize.col('maestroap'))],
        [sequelize.fn('DISTINTIC', sequelize.col('maestroam'))]
        ]
    })
      .then(Usuarios=> {
        res.json(Usuarios);
      });
  });




};
