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

var getUserCourses = function(user){
  return config.courses.filter(function(course){
    return course.user == user && !course.inProgress;
  })
}

var getProCourses = function(user){
  return config.courses.filter(function(course){
    return course.user == user && course.inProgress;
  })
}

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
  var user = req.session.data.email
  res.render('index', { user: user, recCourses: getUserCourses(user), proCourses: getProCourses(user)})
});

router.get('/logout',function(req, res){
  req.session.destroy(function(err) {
    res.redirect('/login');
  })
 
});

module.exports = router
