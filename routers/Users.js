var express = require('express');
var router = express.Router();
var Users = require('../models/User');

/* GET users listing. */
router.get('/users', (req,res)=>{
  Users.findAll({}).then(data=>{
    res.send(data);
  })
})


module.exports = router;