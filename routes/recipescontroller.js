var express = require('express');
var router = express.Router();
const Schema = require("../db/schema.js");
const recipe = Schema.recipeModel;
const ingredients = Schema.ingredModel;
const methodoverride = require('method-override');

//INDEX
router.get('/', (request, response) => {
  recipe.find({})
    .then((recipe) => {
      response.render('recipes/index', {
        recipe: recipe,
      })
     })
    .catch((error) => {
      console.log('error')
    })
});


// new 
router.get('/new', (req, res)=>{
  res.render('recipes/new')
})



//CREATE ROUTE
router.post('/', (req, res) => {
  const newRecipe = req.body
  recipe.create(newRecipe)
    .then(() => {
      res.redirect('/recipes')
    })
    .catch((error) => {
      res.send(error)
    })
})

//EDIT Recipes route 
router.get('/:recipeId/edit', (req, res) => {
  const recipeId = req.params.recipeId
  recipe.findById(recipeId)
    .then((recipe) => {
      res.render('recipes/edit', {
        recipe: recipe

      })
    })
    .catch((error) => {
      console.log(error)
    })
})

// Delete route 
router.get('/:recipeId/delete', (req, res) => {

  const recipeId = req.params.recipeId


  recipe.findByIdAndRemove(recipeId)
    .then((recipes) => {
      res.redirect('/recipes')
    })

})

module.exports = router;