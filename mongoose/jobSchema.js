const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jobSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    default: Math.floor(Math.random() * 10000),
  },
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
  contract: {
    type: String,
    required: true,
    enum: ["CDD", "CDI"],
  },
  location: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  apply: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: Object,
    required: true,
  },
  role: {
    type: Object,
    required: true,
  },
});
module.exports = jobs = mongoose.model("job", jobSchema);
