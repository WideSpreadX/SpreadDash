const mongoose = require("mongoose");

const COVIDmarkerSchema = new mongoose.Schema({
    confirmed: Boolean,
    location: {
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      },
    threat_level: Number,
    site_contamination_date: Date,
    last_updated: Date,
    placed_by: String
});

const COVIDmarker = mongoose.model("COVIDmarker", COVIDmarkerSchema);

module.exports = COVIDmarker;
