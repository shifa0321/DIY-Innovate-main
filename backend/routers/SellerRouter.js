const express = require('express');
const router = express.Router();
const Seller = require('../models/SellerModels');

// Create a new seller profile
router.post('/add', async (req, res) => {
    try {
        const seller = await Seller.create(req.body);
        res.status(201).json({
            status: 'success',
            data: seller
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
});

// Get all sellers
router.get('/getall', async (req, res) => {
    try {
        const sellers = await Seller.find().populate('userId');
        res.status(200).json({
            status: 'success',
            data: sellers
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// Get seller by ID
router.get('/getbyid/:id', async (req, res) => {
    try {
        const seller = await Seller.findById(req.params.id).populate('userId');
        if (!seller) {
            return res.status(404).json({
                status: 'error',
                message: 'Seller not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: seller
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// Update seller profile
router.put('/update/:id', async (req, res) => {
    try {
        const seller = await Seller.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!seller) {
            return res.status(404).json({
                status: 'error',
                message: 'Seller not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: seller
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
});

// Delete seller
router.delete('/delete/:id', async (req, res) => {
    try {
        const seller = await Seller.findByIdAndDelete(req.params.id);
        if (!seller) {
            return res.status(404).json({
                status: 'error',
                message: 'Seller not found'
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Seller deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// Update seller status (pending/approved/rejected)
router.patch('/status/:id', async (req, res) => {
    try {
        const { status } = req.body;
        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid status value'
            });
        }

        const seller = await Seller.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );

        if (!seller) {
            return res.status(404).json({
                status: 'error',
                message: 'Seller not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: seller
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
});

// Update seller rating
router.patch('/rating/:id', async (req, res) => {
    try {
        const { rating } = req.body;
        if (rating < 0 || rating > 5) {
            return res.status(400).json({
                status: 'error',
                message: 'Rating must be between 0 and 5'
            });
        }

        const seller = await Seller.findByIdAndUpdate(
            req.params.id,
            { rating },
            { new: true, runValidators: true }
        );

        if (!seller) {
            return res.status(404).json({
                status: 'error',
                message: 'Seller not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: seller
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
});

// Update total sales
router.patch('/sales/:id', async (req, res) => {
    try {
        const { totalSales } = req.body;
        if (totalSales < 0) {
            return res.status(400).json({
                status: 'error',
                message: 'Total sales cannot be negative'
            });
        }

        const seller = await Seller.findByIdAndUpdate(
            req.params.id,
            { totalSales },
            { new: true, runValidators: true }
        );

        if (!seller) {
            return res.status(404).json({
                status: 'error',
                message: 'Seller not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: seller
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
});

module.exports = router;