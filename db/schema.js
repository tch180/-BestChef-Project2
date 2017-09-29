 //requirements: require mongoose
 const mongoose = require('mongoose')
 
 //create your recipe schema:
 const Schema = mongoose.Schema


 const ingredSchema = new Schema(
     {
        name: String,
        description: String,
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

const newuser = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: true,

        },

        email: {
            type: String,
            required: true
        },
        
})    
  const recipeModel = mongoose.model('recipe', recipeSchema);
  const ingredModel = mongoose.model('ingredients', ingredSchema);
/*   const newuserModel = mongoose.model('users', newuserSchema); */
 //export your recipe with module.exports()
    
 module.exports = { 
     recipeModel: recipeModel,
     ingredModel: ingredModel,
   /*   newuser: newuserModel, */
 }