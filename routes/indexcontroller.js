var express = require('express');
var router = express.Router();
const Schema = require("../db/schema.js");
const users = Schema.registeredusersModel;
const recipe = Schema.recipeModel;
const ingredients = Schema.ingredModel;


/* GET home page. working and loads users index */
router.get('/', (req, res) => {
  res.render('./login/index')
  console.log('----------hello index21-------------')
});

router.get('/users', (request, response)=> {
  users.find({})
  .then((registeredusers)=>{
    response.render('./users/index', {
      registeredusers: registeredusers
    })
  })
.catch((error)=>{
  console.log('error')
})
});

router.get('/recipe', (request, response)=> {
  recipe.find({})
  .then((recipe)=>{
    response.render('recipes/index', {
      recipe: recipe 
    })
    .catch(console.log('hello recipes'))
  })
.catch((error)=>{
  console.log('error')
})
});


/* 
router.get('/', (request, response) => {}) */


module.exports = router;