///////////////////////
//Require Mongoose
///////////////////////
 const mongoose = require('mongoose')



///////////////////////
//Create Schema 
///////////////////////
 const Schema = mongoose.Schema

///////////////////////
//INGREDIENTS SCHEMA
///////////////////////

 const ingredSchema = new Schema({
     name: String,
     description: String,
     prepTime: Number,
 })

///////////////////////
//RECIPES SCHEMA
///////////////////////
 const recipeSchema = new Schema({
     name: String,
     description: String,
     directions: String,
     image: String,
     time: Number,
     ingredients: [ingredSchema]

 })


///////////////////////
//
///////////////////////
 
///////////////////////
//USERS SCHEMA
///////////////////////
 const registeredusersSchema = new Schema({
     name: {
         type: String,
         required: true,
     },

     email: {
         type: String,
         required: true
     },

 })


///////////////////////
//Models 
///////////////////////
 const recipeModel = mongoose.model('recipe', recipeSchema);
 const ingredModel = mongoose.model('ingredients', ingredSchema);
 const registeredusersModel = mongoose.model('users', registeredusersSchema);
 //export your recipe with module.exports()


///////////////////////
//Export Models 
///////////////////////
 module.exports = {
     recipeModel: recipeModel,
     ingredModel: ingredModel,
     registeredusersModel: registeredusersModel,
 }