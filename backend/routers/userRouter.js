const express = require('express');
const Model = require('../models/UserModel')
const router = express.Router();

//add
router.post('/add',(req, res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        console.log('res from user add');
        
        res.status(200).json(res)
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;