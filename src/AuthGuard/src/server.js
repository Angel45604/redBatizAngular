require('coffee-script/register');
require('./app')(function (err, app, db) {
  db.User.create({ login: '2016090395', password: 'MARC', name:'Angel Marcos' }).then(function () {
    var server = app.listen(13441, '127.0.0.1', function () {
      console.log('server ' + server.address().address + ':' + server.address().port + ' started')
    });
  });
});
