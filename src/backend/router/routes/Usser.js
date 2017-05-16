
'use strict';

module.exports = (app, db) => {

    db.Students = require('../../models/Student.js')(db.sequelize, db.Sequelize);
    db.groups = require('../../models/Cat_Groups.js')(db.sequelize, db.Sequelize);
    db.Users = require('../../models/User.js')(db.sequelize,db.Sequelize)


    
  // Trae todos los alumnos de un grupo
  // app.get('/User', (req, res) => {
  //   const group = req.params.group;
  //   db.Students.find({
  //       where: { group:group},
  //       attributes: ['name'],
  //       include:[{
  //         model:db.Students,
  //         where:{
  //           iduser:db.sequelize.col(db.Users.iduser)
  //         },
  //                   include:[{
  //                   model:db.groups,
  //                   where:{
  //                   group:db.sequelize.col(db.Students.group)
  //                 }


  //               }]
                

  //       }]
  //   })
  //     .then(Students => {
  //       res.json(Students);
  //     });
  // });

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