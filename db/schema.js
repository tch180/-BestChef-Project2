 //requirements: require mongoose
 const mongoose = require('mongoose')
 
 //create your recipe schema:
 const Schema = mongoose.Schema

/* const recipe = [] */
 const ingredSchema = new Schema(
     {
        name: String,
        description: String,
        img: String,
        origin: String,
        prepTime: Number
     }
 )

 const recipeSchema = new Schema(
     {
            name: String,
            description: String,
            directions: String,
            img: String,
            time: Number,
         recipe:[ingredSchema]   

        })
  const recipeModel = mongoose.model('recipe', recipeSchema);
  const ingredModel = mongoose.model('ingredients', ingredSchema);
 //export your recipe with module.exports()
    
 module.exports = { 
     recipeModel: recipeModel,
     ingredModel: ingredModel,
 }