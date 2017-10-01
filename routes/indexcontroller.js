var express = require('express');
var router = express.Router();
const Schema = require("../db/schema.js");
const users = Schema.registeredusersModel;
const recipes = Schema.recipeModel;


/* GET home page. working and loads users index */
router.get('/', (req, res) => {
  res.render('./login/index')
  console.log('----------hello index21-------------')
});





router.get('/users', (request, response)=> {
  users.find({})
  .then((registeredusers)=>{
    response.render('users/index', {
      registeredusers: registeredusers
    })
  })
.catch((error)=>{
  console.log('error')
})
});

router.get('/recipes', (request, response)=> {
  recipes.find({})
  .then((registeredusers)=>{
    response.render('users/index', {
      registeredusers: registeredusers
    })
  })
.catch((error)=>{
  console.log('error')
})
});


/* 
router.get('/', (request, response) => {}) */


module.exports = router;