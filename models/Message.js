const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Array
  }
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
