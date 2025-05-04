const { Schema, model } = require("../connection");

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  deliveryAddress: { type: String, required: true },
  contactNumber: { type: String, required: true },
  itemList: [
    {
      productId: { type: Schema.Types.ObjectId, required: true, ref: "product" },
      title: { type: String, required: true },
      quantity: { type: Number, required: true },
      unitPrice: { type: Number, required: true },
      subtotal: { type: Number, required: true },
    },
  ],
  date: { type: Date, default: Date.now },
});

module.exports = model("order", orderSchema);