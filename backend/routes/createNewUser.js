var express = require('express');
var router = express.Router();

var User = require('../models/User');

//Get all users
router.get('/', function (req, res) {
    User.find(
        {}
    ).exec(function (err, result) {
        
    })
})

//Try to add new user
router.post('/', function (req, res) {
        console.log(req.body);
})
