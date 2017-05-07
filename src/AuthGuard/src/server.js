require('coffee-script/register');
require('./app')(function (err, app, db) {
  db.USER.create({ username: '2016090395', password: 'MARC', name:'Angel', surname:'Marcos', role_list_id:1 }).then(function () {
    var server = app.listen(13441, '127.0.0.1', function () {
      console.log('server ' + server.address().address + ':' + server.address().port + ' started')
    });
  });
});
