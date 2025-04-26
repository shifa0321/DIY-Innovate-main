const { Schema, model } = require("../connection");

const SellerSchema = new Schema({
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'user',
        required: true 
    },
    businessName: { 
        type: String, 
        required: [true, 'Business name is required'] 
    },
    address: { 
        type: String, 
        required: [true, 'Address is required'] 
    },
    phone: { 
        type: String, 
        required: [true, 'Phone number is required'] 
    },
    description: { 
        type: String,
        required: [true, 'Business description is required'] 
    },
    documents: {
        gst: { type: String, required: [true, 'GST document is required'] },
        pan: { type: String, required: [true, 'PAN document is required'] }
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    totalSales: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = model('seller', SellerSchema);