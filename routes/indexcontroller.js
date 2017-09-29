var express = require('express');
var router = express.Router();
const Schema = require("./recipescontroller.js");
const CompanyModel = Schema.CompanyModel;



/* GET home page. working and loads users index */
router.get('/', function(req, res) {
  res.render('./login/index')
  console.log('----------hello index21-------------')
});





router.get('/users', function(req, res) {
  res.render('./users/index');
  console.log('hello users')
});


module.exports = router;
