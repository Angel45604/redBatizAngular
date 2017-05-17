
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
db.groups.hasOne(db.Students,{foreignKey:'groupfk',sourceKey:'id'});
db.Students.belongsTo(db.groups,{foreignKey:'groupfk',sourceKey:'id'});
db.Users.hasOne(db.Students,{foreignKey:'iduserfk',sourceKey:'id'});
db.Students.belongsTo(db.Users,{foreignKey:'iduserfk',sourceKey:'id'});


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

//Trae todos los alumnos de un solo grupo 
db.Users.findAll({
        attributes: ['name', 'username'],
        required:true,
        include: [
            {
                model: db.Students,
                attributes: ['boleta'],
                required:true,

                include: [
                    {
                        model: db.groups,
                        attributes: ['grupo'],
                        required:true,
                        
                            

                                where: {
                                    $and: [
                                        db.Sequelize.literal("groups.group=4im8"),
                                        

                                    ]
                                }
                    }
                ]
            }
        ]
    }).then(function(state){

     console.log(state);

    });




};
