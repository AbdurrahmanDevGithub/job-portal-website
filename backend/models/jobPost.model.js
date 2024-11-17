const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    filename: String,
    content: String,
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  environment: {
    type: String,
    required: true,
    trim: true
  },
  exp_date: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  skills: {
    type: String,
    required: true,
    trim: true
  }
});

const Job = mongoose.model('JobUpload', jobSchema);
module.exports = Job;
