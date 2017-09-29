var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Best CHEF' });
  console.log('hello index')
});
router.get('/users', function(req, res, next) {
  res.render('');
  console.log('hello users')
});


module.exports = router;
