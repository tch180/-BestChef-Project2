var express = require('express');
var router = express.Router();
const Schema = require("../db/schema.js");
const registeredusers = Schema.registeredusersModel;
const methodoverride = require('method-override');





// INDEX GET users listing. 
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
});


//CREATE ROUTE
router.post('/', (req,res)=>{
 const newUser = req.body
 registeredusers.create(newUser)
 .then(()=>{
   res.redirect('/users/index')
 })
 .catch((error)=>{
   res.send(error)
 })
})

// EDIT 
router.get('/:userId/edit', (req, res) => {
  const userId = req.params.userId
  registeredusers.findById(userId)
    .then((user) => {
      res.render('users/edit', {
        user: user,
        userId: userId
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

//UPDATE ROUTE 
 router.put('/:userId', (req, res)=>{
  const userId = req.params.userId
  const updatedUser = req.body
  registeredusers.findByIdAndUpdate(userId, updatedUser, {new: true})
  .then(()=>{
    res.redirect(`/users/${userId}`)
  })
})
 

// SHOW route 
router.get('/:userId', (req, res)=>{
  const userId = req.params.userId
registeredusers.findByIdAndUpdate(userId)
  .then((user)=>{
    res.render('users/edit')
user: user
userId: userId
  })

.catch((error) =>{
  console.log(error)
})
})


//Delete
router.get('/:userId/delete', (req, res)=>{

  const userId = req.params.userId
  console.log('Route hit with userId of : ' + userId)
  registeredusers.findByIdAndRemove(userId)
  .then((users)=>{
    res.redirect('/users')
  })
  
  })


module.exports = router;
