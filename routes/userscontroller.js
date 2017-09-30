var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(request, response) {
  res.render('users/index');
});

module.exports = router;
