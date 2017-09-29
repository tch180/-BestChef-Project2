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


const users 



