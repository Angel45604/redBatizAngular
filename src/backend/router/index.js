'use strict'

const routes = [
  require('./routes/Tasks'),
   require('./routes/Academies'),
    require('./routes/Cat_Deptos'),
     require('./routes/Cat_Puesto'),
      require('./routes/Materia')
 
];


// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};