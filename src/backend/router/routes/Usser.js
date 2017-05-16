
'use strict';

module.exports = (app, db) => {

    db.Teacher= require('../models/Teacher.js')(sequelize, Sequelize);
    db.Students = require('../models/Student.js')(sequelize, Sequelize);
    db.groups = require('../models/Cat_Groups.js')(sequelize, Sequelize);



    
  // Trae todos los alumnos de un grupo
  app.get('/User', (req, res) => {
    const group = req.params.group;
    db.Students.find({
        where: { group:group},
        attributes: ['name'],
        include:[{
          model:Students,
          where:{
            iduser:sequelize.col(Users.iduser)
          },
                    include:[{
                    model:groups,
                    where:{
                    group:sequelize.col(Students.group)
                  }


                }]
                

        }]
    })
      .then(Students => {
        res.json(Students);
      });
  });

  // Alumnos de un grupo
  app.get('/Users/:id', (req, res) => {
    const id = req.params.id;
    const name=req.params.name;
    const group= req.params.group;
  
    db.Users.find({
      where: { group:group},
      attributes: ['name','surname','group']
    })
      .then(Cat_Academy => {
        res.json(Cat_Academy);
      });
  });

};