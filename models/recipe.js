 //requirements: require mongoose
 const mongoose = require('mongoose')
 
 //create your donut schema:
 const Schema = mongoose.Schema


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

        })
  const donutModel = mongoose.model('donut', donutSchema);
 //export your donut with module.exports()
 
 module.exports = donutModel