var express = require('express'),
    passport = require('passport');

var routes = function(User) {
    var router = express.Router();

    // routes for registration
    router.route('/register')
        .get(function(req, res) {
            res.render('register');
        })
        .post(function(req, res) {
           User.count().then(function(number) {
               if (number >= 1) {
                   res.redirect('/auth/login');
               } else {
                   User.create({
                       username: req.body.username,
                       password: req.body.password
                   });

                   res.redirect('/auth/login');
               }
           });
        });
    //routes for login
    router.route('/login')
        .get(function(req, res) {
            res.render('login');
        })
        .post(function(req, res) {
            passport.authenticate('local', { successRedirect: '/dashboard',
                failureRedirect: '/auth/login' });

        });
    return router;
};

module.exports = routes;