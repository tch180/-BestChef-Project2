//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, recipe schema
const express = require('express')
const router = express.Router();
const Schema = require("./recipescontroller.js");
const recipeModel = Schema.recipeModel;





//======================
// INDEX
//====================== 
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (request, response)=> {
    response.render('/routes/index')
    console.log('---------------hello index11')
})


//======================
// NEW
//====================== YES WORKING !!!!
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (request, response) =>{
    response.render('recipes/new')
    console.log('hello new')
})


//======================
// SHOW
//====================== YES WORKING !!!!!
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', (request, response)=>{
    response.render('donuts/show')
    console.log('hello show')
})



//======================
// CREATE
//======================  ******** 
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.post('/', (request, response)=>{
    response.redirect('/donuts/create')
    console.log('hello create')
})


//======================
// EDIT
//====================== YES WORKING !!!!
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', (request, response)=> {
    response.render('donuts/edit'),{
        
        
}


//======================
// UPDATE
//====================== ******
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.put('/:id', (request, response) => {
    response.redirect('/donuts/show')
    console.log('hello update')
})


//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
router.delete('/:id', (request, response)=>{
    response.redirect('/donuts')
})
})

//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;