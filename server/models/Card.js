const { Schema } = require("mongoose");

//Subdocument schema, it will just be used to attach to the User model
const cardSchema = new Schema({
  brand: {
    type: String,
  },
  year: {
    type: Number,
  },
  cardNumber: {
    type: Number,
  },
  player: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = cardSchema;
