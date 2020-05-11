const mongoose = require('mongoose');

const categoryModel = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'category must have a title'],
    minlength: [3, 'category title must be at least 3 characters long'],
    maxlength: [50, 'Category must be less than 50 characters long'],
    trim: true,
    createdAt: {
      type: Date,
      default: Date.now()
    },
    unique: true
  }
});

const Category = mongoose.model('Category', categoryModel);

module.exports = Category;
