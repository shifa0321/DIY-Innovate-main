const { Schema, model } = require("../connection");

const ProductSchema = new Schema(
  {
    title: { type: String, required: [true, 'Product name is required']},
    description: { type: String, required: [true, 'Product description is required']},
    price: { type: Number, required: [true, 'Product price is required'], min: [0, 'Price must be a positive number'] },
    category: { type: String, required: [true, 'Product category is required'] },
    stock: { type: Number, required: [true, 'Stock quantity is required'], min: [0, 'Stock must be a positive number'] },
    size: { type: String,  },
    imageUrl: { type: String, required: [true, 'Product image URL is required'] },
    videoUrl : { type: String, required: [true, 'Product video URL is required'] },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = model('product', ProductSchema);