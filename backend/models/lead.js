const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  agency: { type: String, required: true },
  type: String,
  email: String,
  website: String,
  linkedin: String,
  country: String,
  name: String,

  status: {
    type: String,
    default: "New",
  },

  followUpStage: {
    type: String,
    default: "none",
  },

  followUpDate: Date,

  lastContactDate: Date,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Lead", LeadSchema);
