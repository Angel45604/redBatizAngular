var   app, login, logout, sequelize, store;
var express = require('express'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session'),
    Sequelize = require('sequelize'),
    Store = require('express-sequelize-session')(expressSession.Store),
    cors = require('cors');

const DB = require('../../backend/config/dbconnection.js');

// sequelize = new Sequelize('test1', 'root', 'n0m3l0', {
//   host: "localhost",
//   port: 3306,
//   dialect: 'mysql',
//   define:{
//     underscored: true
//   },
//   logging: false
// });

// //MODELS
// const USER =sequelize.define('user', {
//   username: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   name:{
//     type: Sequelize.STRING,
//     allowNull:false
//   },
//   surname:{
//     type: Sequelize.STRING,
//     allowNull:false
//   }
// });

// const ROLES =sequelize.define('roleList',{
//   roleDescription:{
//     type:Sequelize.STRING,
//     allowNull:false
//   }
// });

// console.log(USER);

store = new Store(DB.sequelize);

// ROLES.hasMany(USER,{foreignKey:'idRolfk', sourceKey:'id'});
// USER.belongsTo(ROLES,{foreignKey:'idRolfk', sourceKey:'id'});

DB.users.belongsTo(store.Session, {
  foreignKeyConstraint: true
});

// ROLES.bulkCreate([
//           { roleDescription: 'student'},
//           { roleDescription: 'teacher'},
//           { roleDescription: 'admin',}
//           ]).then(function() {
//             return ROLES.findAll();
//             }).then(function(roles) {
//               console.log(roles)
//             });

login = function(req, done) {
  return DB.users.findOne({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  }).then(function(user) {
    if (!user) {
      throw new Error('login failed');
    } else {
      return store.Session.findOne({
        where: {
          sid: req.sessionID
        }
      }).then(function(session) {
        if (!session) {
          return user;
        } else {
          console.log("EXITO");
          return user.setSession(session);
        }
      });
    }
  }).then(function(user) {
    return done(null, user);
  })["catch"](function(err) {
    return done(err, null);
  });
};

logout = function(req, done) {
  return DB.users.findOne({
    where: {
      username: req.session.user
    }
  }).then(function(user) {
    if (!user) {
      return alert('Login failed');
    } else {
      return user.setSession(null);
    }
  }).then(function(user) {
    return done(null, user);
  })["catch"](function(err) {
    return done(err, null);
  });
};

app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(multer());

app.use(cookieParser());

app.use(expressSession({
  name: 'sid',
  secret: 'MyAwesomeAppSessionSecret',
  store: store,
  resave: false,
  saveUninitialized: true
}));

app.all('*', function(req, res, next) {
  var ref;
  if ((ref = req.path) === '/' || ref === '/login' || ref === '/logout') {
    return next();
  } else {
    if (req.session.user) {
      return next();
    } else {
      return res.sendStatus(401);
    }
  }
});

app.get('/', function(req, res) {
  return res.send("<html><head><title>Login</title></head><body>\n<form action=\"/login\" method=\"POST\">\n  <label>Login <input type=\"text\" name=\"login\"/></label>\n  <label>Password <input type=\"password\" name=\"password\"/></label>\n  <button type=\"submit\">Login</button>\n</form></body></html>");
});

app.post('/login', function(req, res, next) {
  return login(req, function(err, user) {
    if (err != null) {
      return next(err);
    } else {
      console.log("EXITO");
      console.log(user);
      req.session.user = user.username;
      return res.send(user);
    }
  });
});

app.get('/logout', function(req, res, next) {
  console.log("adios");
  return logout(req, function(err) {
    if (err != null) {
      return next(err);
    } else {
      delete req.session.user;
      return req.session.destroy(function() {
        return res.redirect('/');
      });
    }
  });
});

app.get('/private', function(req, res) {
  return res.send("<html><head><title>Private</title></head><body>\n<h1>Hola " + req.session.user + "</h1>\n<p>...</p>\n<a href=\"/logout\">Logout</a>\n</body></html>");
});

module.exports = function(done) {
  return DB.sequelize.sync({
    force:false
  }).then(function() {
    return done(null, app, {
      Session: store.Session,
      USER: DB.users
    });
  })["catch"](function(err) {
    return done(err);
  });
};