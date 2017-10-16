var express = require('express')
var router = express.Router()
var session = require('express-session')
const config = require('./config');

router.use(session({
  secret: '2C44-4D44-WppQ38S',
  resave: true,
  saveUninitialized: true
}));

var userExists = function(userEmail){
  return config.users.filter(function(user){
      return user == userEmail
  }).length >0;
}

var auth = function(req, res, next) {
  if(req.session && userExists(req.session.data.email)){
    return next();
  }else{
    res.redirect('/login')
  }
};

router.get('/login', function (req, res) {
  if (!req.query.email) {
    res.render('login');  
  } else if (userExists(req.query.email)){
    res.redirect('/')
  }else{
    res.redirect('/login')
  }

});

router.get('/', auth, function (req, res) {
  res.render('index', {user: req.session.data.email})
});

module.exports = router
