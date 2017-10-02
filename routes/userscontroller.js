var express = require('express');
var router = express.Router();
const Schema = require("../db/schema.js");
const registeredusers = Schema.registeredusersModel;





/* GET users listing. */
router.get('/', (request, response)=> {
  registeredusers.find({})
  .then((registeredusers)=>{
    response.render('users/index', {
      registeredusers: registeredusers
    })
  })
.catch((error)=>{
  console.log('error')
})
}),


//NEW ROUTE 
router.get('/new', (req, res)=>{
  res.render('users/new')
}),
//CREATE ROUTE
router.post('/', (req,res)=>{
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
