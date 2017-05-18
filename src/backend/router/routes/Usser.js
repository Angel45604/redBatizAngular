
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

// Obtener a todos alv 
  app.get('/Usuarios', (req, res) => {
    db.Usuarios.findAll({
        attributes: ['Jefeacademianame', 'jefeacademiaap',
         'jefeacademiaam','maestroname', 'maestroap',
         'maestroam','alumnoname','alumnoap','alumnoam','grupo']
    })
      .then(Usuarios => {
        res.json(Usuarios);
      });
  });

//Obtener todos los grupos de un profesor
app.get('/Usuarios/grupos/:maestroname/:maestroap/:maestroam', (req, res) => {
     const maestroname= req.params.maestroname;
     const maestroap= req.params.maestroap;
     const maestroam= req.params.maestroam;
     db.Usuarios.findAll({
      where: { 
        maestroname:maestroname,
        maestroam:maestroam,
        maestroap:maestroap

      },
      attributes:['grupo'],
      group: ['grupo']
    })
      .then(Usuarios=> {
        res.json(Usuarios);
      });
  });

//obtener todos los alumnos del grupo de un profesor


app.get('/Usuarios/alumnos/:grupo/:maestroname/:maestroap/:maestroam', (req, res) => {
    const grupo= req.params.grupo;
     const maestroname= req.params.maestroname;
     const maestroap= req.params.maestroap;
     const maestroam= req.params.maestroam;
     db.Usuarios.findAll({
      where: { 
        grupo:grupo,
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
app.get('/Usuarios/maestros/:jefeacademianame/:jefeacademiaap/:jefeacademiaam', (req, res) => {
     const jefeacademianame= req.params.jefeacademianame;
     const jefeacademiaap= req.params.jefeacademiaap;
     const jefeacademiaam= req.params.jefeacademiaam;
     db.Usuarios.findAll({
      where: { 
        jefeacademianame:jefeacademianame,
        jefeacademiaam:jefeacademiaam,
        jefeacademiaap:jefeacademiaap

      },
      attributes: [
       'maestroname','maestroap','maestroam'
        ],
        group:'maestroname'
      
    })
      .then(Usuarios=> {
        res.json(Usuarios);
      });
  });




};
