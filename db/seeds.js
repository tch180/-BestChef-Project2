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
const registeredusersModel = schema.registeredusersModel;



const Marsala = new recipeModel({
    name: "Chicken Marsala",
    description: "Creamy Chicken Marsala",
    image: "https://i.imgur.com/UIywQQI.jpg?1",
    origin: "Italy",
    time: 25,
    directions: "Minim fugiat enim sit pariatur ex dolor ad quis consequat nulla esse dolor occaecat. Nostrud qui sit incididunt veniam ea quis fugiat cillum elit cillum commodo nisi occaecat. Elit enim dolor enim aliqua amet adipisicing.",
    ingredients: [ingredModel],
    
});
const Greenbean = new recipeModel({
    name: "Greenbean Alamdine",
    description: "Sauteed greenbeans",
    image: "https://i.imgur.com/IPnOsnu.jpg",
    origin: "Italy",
    time: 25,
    directions: "Minim fugiat enim sit pariatur ex dolor ad quis consequat nulla esse dolor occaecat. Nostrud qui sit incididunt veniam ea quis fugiat cillum elit cillum commodo nisi occaecat. Elit enim dolor enim aliqua amet adipisicing.",
    ingredients: [ingredModel]
});
const redpotato = new recipeModel({
    name: "Garlic roasted RedBliss potatoes",
    description: "roasted potatoes",
    image: "https://i.imgur.com/tQ3DxIA.jpg",
    origin: "Italy",
    time: 1.5,
    directions: "Labore adipisicing mollit reprehenderit enim ea consequat labore nisi.",
    ingredients: [ingredModel]
});
const MeatLoaf = new recipeModel({
    name: "Asian MeatLoaf",
    description: "Asian inspired meatloaf",
    image: "https://i.imgur.com/UZdXmqk.jpg",
    origin: "fusion food",
    time: 2.5,
    directions: "Ut et elit ipsum est ex eu amet exercitation id ut eiusmod minim officia nisi.",
    ingredients: [ingredModel]  
});



const chickenBreast = new ingredModel({
    name: "Chicken Breast",
    description: "Farm Raised NoN GMO and RBGH-1 free ",
    prepTime: 25,

});
const heavyCream = new ingredModel({
    name: "Heavy Whipping Cream",
    description: "Ultra Pasturized Heavy Cream, Great for cooking and sauces ",
    prepTime: 5,
    
});
const marsalaWine = new ingredModel({
    name: "Marsala Wine",
    description: "Marsala cooking wine ",
    prepTime: 5,
});
const garlic = new ingredModel({
    name: "Garlic Minced",
    description: " Fresh Minced Garlic",
    prepTime: 15,
});
const beans = new ingredModel({
    name: "French Green Beans ",
    description: "Fresh french style greenbeans",
    prepTime: 25,
});
const potato = new ingredModel({
    name: "Red Bliss Potatoes",
    description: "Hand Picked and Pesticide free, fresh from your local farm",
    prepTime: 25,
});

const recipes = [Marsala, Greenbean, redpotato, MeatLoaf]
const recipesingred = [chickenBreast, heavyCream, marsalaWine, garlic, beans, potato]

recipes.forEach((recipe) => {
    recipe.ingredients = recipesingred
    recipe.save()
        .then((recipe) => {
            console.log(`${recipe.name} saved `)
        })
        .catch((error) => {
            console.log(error)
        });
})


/* const recipesingred = [chickenBreast, heavyCream, marsalaWine, garlic, beans, potato]
 */
// recipesingred.forEach((recipesingred) => {
//     recipesingred.save()
//         .then((recipesingred) => {
//             console.log(`${recipesingred.name} saved `)
//         })
//         .catch((error) => {
//             console.log(error)
//         });
// });



const bob = new registeredusersModel({
    name: "bob, Smith",

    email: "BobSmith@gmail.com",
});
const Victory = new registeredusersModel({
    name: "Victory, Spears",

    email: "VicotryLynn@gmail.com",
});
const Elias = new registeredusersModel({
    name: "Kaysen, Redner",

    email: "Eredner@gmail.com",
})

const registeredusers = [bob, Victory, Elias]

registeredusers.forEach((registeredusers) => {
    registeredusers.save()
        .then((registeredusers) => {
            console.log(`${registeredusers.name} saved `)
        })
        .catch((error) => {
            console.log(error)
        });

})








/* 
  recipe.create(newRecipe, function(err) {
        console.log("SEED: NEW PRODUCTS CREATED!");
        res.redirect('/');
  }); 
 


//======================
// EXPORTS
//====================== */
/* module.exports = router; */
db.close();