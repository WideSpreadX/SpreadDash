const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_name: String,
    product_description: String,
    product_sku: String,
    product_price: String,
    available: Boolean,
    product_image: String

});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;