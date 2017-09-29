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



const Marsala = new recipeModel ({
 name:"Chicken Marsala",
 description:"Creamy Chicken Marsala", 
 img:"https://i.imgur.com/UIywQQI.jpg?1", 
 origin: "Italy", 
 time: 25, 
 directions: "Minim fugiat enim sit pariatur ex dolor ad quis consequat nulla esse dolor occaecat. Nostrud qui sit incididunt veniam ea quis fugiat cillum elit cillum commodo nisi occaecat. Elit enim dolor enim aliqua amet adipisicing."
 });
const Greenbean = new recipeModel ({
    name:"Greenbean Alamdine", 
    description:"Sauteed greenbeans", 
    img:"https://i.imgur.com/UIywQQI.jpg?1", 
    origin: "Italy", 
    time: 25, 
    directions: "Minim fugiat enim sit pariatur ex dolor ad quis consequat nulla esse dolor occaecat. Nostrud qui sit incididunt veniam ea quis fugiat cillum elit cillum commodo nisi occaecat. Elit enim dolor enim aliqua amet adipisicing." 
});
const redpotato = new recipeModel ({
name: "Garlic roasted RedBliss potatoes",
description: "roasted potatoes",
img: "#",
origin: "Italy",
time: 1.5,
directions: "Labore adipisicing mollit reprehenderit enim ea consequat labore nisi.",
});
const MeatLoaf = new recipeModel ({
    name: "Asian MeatLoaf",
    description: "Asian inspired meatloaf",
    img:"#",
    origin: "fusion food",
    time: 2.5,
    directions: "Ut et elit ipsum est ex eu amet exercitation id ut eiusmod minim officia nisi.",

});
const recipes = [Marsala, Greenbean, redpotato, MeatLoaf]

    recipes.forEach((recipe)=>{
recipe.save()
.then((recipe)=> {
    console.log(`${recipe.name} saved `)
}) 
.catch((error)=>{
    console.log(error)
});
    })

const chickenBreast = new ingredModel ({
    name: "Chicken Breast",
    description: "Farm Raised NoN GMO and RBGH-1 free ",
    prepTime: 25,
});
const heavyCream = new ingredModel ({
    name: "Heavy Whipping Cream",
    description: "Ultra Pasturized Heavy Cream, Great for cooking and sauces ",
    prepTime: 5,
});
const marsalaWine = new ingredModel ({
    name: "Marsala Wine",
    description: "Marsala cooking wine ",
    prepTime: 5,
});
const garlic = new ingredModel ({
    name:"Garlic Minced",
    description:" Fresh Minced Garlic",
    prepTime: 15,
});
const beans = new ingredModel ({
    name:"French Green Beans ",
    description: "Fresh french style greenbeans",
    prepTime: 25,
});
const potato = new ingredModel ({
    name: "Red Bliss Potatoes",
    description:"Hand Picked and Pesticide free, fresh from your local farm",
    prepTime: 25,
});
 const







    /* var user = new usermodel ({name:`this.name` })
 */





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