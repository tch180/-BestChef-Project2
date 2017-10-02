var express = require('express');
var router = express.Router();
const Schema = require("../db/schema.js");
const users = Schema.registeredusersModel;
const recipe = Schema.recipeModel;
const ingredients = Schema.ingredModel;


router.get('/', (request, response)=> {
    recipe.find({})
    .then((recipe)=>{
      response.render('./recipes/index', {
        recipe: recipe, 
        ingredients: ingredients
      })
      .then(console.log('hello recipes'))
    })
  .catch((error)=>{
    console.log('error')
  })
  });


  //CREATE ROUTE
router.post('/users', (req,res)=>{
    const newuser = request.body
    registeredusers.create(newuser)
    .then(()=>{
      res.redirect('/users/index')
    })
    .catch((error)=>{
      res.send(error)
    })
  })
  module.exports = router;