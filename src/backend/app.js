'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  db = require('./config/dbconnection.js'),
  router = require('./router/index');

  const multer = require('multer'),
    path = require('path');


const app = express();
const PORT = 3000;
var cors = require('cors');
var cookieParser = require('cookie-parser');

var Tasks=require('./router/routes/Tasks');
var FileUpload=require('./router/routes/FileUpload');
var User = require('./router/routes/Usser');
var Academies = require('./router/routes/Academies');
var Cat_Deptos = require ('./router/routes/Cat_Deptos');
var Cat_Puesto = require ('./router/routes/Cat_Puesto');
var Materia = require('./router/routes/Materia');

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

router(app, db);

app.use('/', router);
app.use('/Tasks',Tasks);
app.use('/User', User);
app.use('/Academies', Academies);
app.use('/Cat_Deptos',Cat_Deptos);
app.use('/Cat_Puesto',Cat_Puesto);
app.use('/Materia',Materia);
app.use('./upload',FileUpload);



//drop and resync with { force: true }
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
  });
});