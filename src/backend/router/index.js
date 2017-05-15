'use strict'

const routes = [
  require('./routes/Tasks'),
  require('./routes/FileUpload'),
];


// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};