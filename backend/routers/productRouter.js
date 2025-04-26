const express = require('express');
const Model = require('../models/ProductModel')
const router = express.Router();

//add
router.post('/add',(req, res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        console.log('res from product add');
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
    });
});


router.get('/getall',(req, res) => {
    console.log(req.body);
    Model.find()
    .then((result) => {
        console.log('res from user add');
        
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
    });
});
  // url parameter
router.get('/getbycity/:city', (req, res) => {
    Model.find({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getbyemail', (req, res) => {
    res.send('response from user getbyemail');
})

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;