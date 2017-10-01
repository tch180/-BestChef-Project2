var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', (request, response)=> {
  registeredusers.find({})
  .then((registeredusers)=>{
    response.render('users/index', {
      registeredusers: registeredusers
    })
  })
.catch((error)=>{
  console.log('error')
})
});

module.exports = router;
