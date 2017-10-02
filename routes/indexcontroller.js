var express = require('express');
var router = express.Router();
const Schema = require("../db/schema.js");




/* GET home page. working and loads users index */
router.get('/', (req, res) => {
  res.render('./login/index')
  console.log('----------hello index21-------------')
});



module.exports = router;