require('dotenv').config();

var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var schema = require("./schema.js");

mongoose.connect(process.env.MONGODB_URI)


const db = mongoose.connection
db.on('error', (error) => {
  console.log(error)
})
db.once('open', () => {
  console.log('Connected to MongoDB! Surprised? Me too!')
})


const recipeModel = schema.recipeModel;
const ingredModel = schema.ingredModel;



const Marsala = new recipeModel ({name:"Chicken Marsala", description:"Creamy Chicken Marsala", img:"https://i.imgur.com/UIywQQI.jpg?1", origin: "Italy", time: 25, directions: "Minim fugiat enim sit pariatur ex dolor ad quis consequat nulla esse dolor occaecat. Nostrud qui sit incididunt veniam ea quis fugiat cillum elit cillum commodo nisi occaecat. Elit enim dolor enim aliqua amet adipisicing." })
const Marsalas = new recipeModel ({name:"Chicken Marsala", description:"Creamy Chicken Marsala", img:"https://i.imgur.com/UIywQQI.jpg?1", origin: "Italy", time: 25, directions: "Minim fugiat enim sit pariatur ex dolor ad quis consequat nulla esse dolor occaecat. Nostrud qui sit incididunt veniam ea quis fugiat cillum elit cillum commodo nisi occaecat. Elit enim dolor enim aliqua amet adipisicing." })




const recipes = [Marsala, Marsalas]

    recipes.forEach((recipe)=>{
recipe.save()
.then((recipe)=> {
    console.log(`${recipe.name} saved `)
}) 
.catch((error)=>{
    console.log(error)
});
    })






	/* var newRecipe = [
			{
					name: "Chicken Marsala",
					description: "Creamy Chicken Marsala ",
					img: "https://i.imgur.com/UIywQQI.jpg?1",
					origin: "Italy",
                    time: 25,
                    directions: "Minim fugiat enim sit pariatur ex dolor ad quis consequat nulla esse dolor occaecat. Nostrud qui sit incididunt veniam ea quis fugiat cillum elit cillum commodo nisi occaecat. Elit enim dolor enim aliqua amet adipisicing.",
			}, {
                name: "Greenbean Almadine ",
                description: "Creamy Chicken Marsala ",
                img: "https://i.imgur.com/UIywQQI.jpg?1",
                origin: "Italy",
                time: 15
		}, {
            name: "Asian MeatLoaf ",
            description: "Creamy Chicken Marsala ",
            img: "https://i.imgur.com/UIywQQI.jpg?1",
            origin: "Italy",
            time: 2.5
		}, {
            name: "Roasted rosemary and garlic potatoes",
            description: "Creamy Chicken Marsala ",
            img: "https://i.imgur.com/UIywQQI.jpg?1",
            origin: "Italy",
            time: 1.5
		}
	];


  recipe.create(newRecipe, function(err) {
        console.log("SEED: NEW PRODUCTS CREATED!");
        res.redirect('/');
  });

});

//======================
// EXPORTS
//====================== */
/* module.exports = router; */
db.close();