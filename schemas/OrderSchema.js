const { Schema} = require("mongoose");

const OrderSchema = new Schema({
    name: String,
      qty: Number,
      price: Number,
      Mode: String,
});


module.exports = {OrderSchema};

