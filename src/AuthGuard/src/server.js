require('coffee-script/register');
require('./app')(function (err, app, db) {
db.USER.bulkCreate([
{ username: '2016090395', password: 'MARC', name:'Angel', surname:'Marcos', group:'4IM8', idRolfk:1 },
{ username: '2016090811', password: 'RAMO', name:'Pablo', surname:'Cobos', group:'4IM7', idRolfk:1 },
{ username: 'teacher', password: 'teacher', name:'Maestro1', surname:'Apellido1', group:'4IM8', idRolfk:2},
{ username: 'teacher2', password: 'teacher2', name:'Maestro2', surname:'Apellido2', group:'4IM8', idRolfk:2},
{username: 'admin', password: 'admin', name:'AdminTest', surname:'Surname2', group:'4IM8', idRolfk:3}
]).then(function () {
    var server = app.listen(13441, '127.0.0.1', function () {
      console.log('server ' + server.address().address + ':' + server.address().port + ' started')
    });
  });
});
