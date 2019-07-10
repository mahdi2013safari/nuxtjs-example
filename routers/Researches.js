const express = require('express');
const router = express.Router();
const Research = require('../models/Research');




router.get('/researches',(req,res)=>{
    Research.findAll().then((data)=>{
        res.json(data);
    })
});



module.exports = router;