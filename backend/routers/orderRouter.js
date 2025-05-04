const express = require('express');
const Model = require('../models/orderModel')
const router = express.Router();

//add
router.post('/add', (req, res) => {
    if (!req.body.deliveryAddress || !req.body.contactNumber || !req.body.itemList) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields'
        });
    }

    new Model(req.body).save()
        .then((result) => {
            res.status(201).json({
                success: true,
                _id: result._id,
                deliveryAddress: result.deliveryAddress,
                contactNumber: result.contactNumber,
                itemList: result.itemList
            });
        })
        .catch((err) => {
            console.error('Order save error:', err);
            res.status(500).json({
                success: false,
                message: 'Failed to save order',
                error: err.message
            });
        });
});

//getall
router.get('/getall', (req, res) => {
    Model.find()
        .populate('user', 'name email') // Include user details
        .populate('itemList.productId', 'title') // Include product details
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.error('Error fetching orders:', err);
            res.status(500).json({ message: 'Server error', error: err });
        });
});

// url parameter
router.get('/getbycity/:city', (req, res) => {
    Model.find({ 'deliveryAddress.city': req.params.city })
        .populate('user', 'name email')
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.error('Error fetching orders by city:', err);
            res.status(500).json({ message: 'Server error', error: err });
        });
});

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .populate('user', 'name email')
        .populate('itemList.productId', 'title description price')
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(result);
        }).catch((err) => {
            console.error('Error fetching order by ID:', err);
            res.status(500).json({ message: 'Server error', error: err });
        });
});

router.put('/update/:id', (req, res) => {
    // Validate required fields
    if (!req.body.deliveryAddress || !req.body.contactNumber) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(result);
        }).catch((err) => {
            console.error('Error updating order:', err);
            res.status(500).json({ message: 'Server error', error: err });
        });
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json({ message: 'Order deleted successfully' });
        }).catch((err) => {
            console.error('Error deleting order:', err);
            res.status(500).json({ message: 'Server error', error: err });
        });
});

module.exports = router;