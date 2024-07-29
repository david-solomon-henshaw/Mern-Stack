// require the mongoose package or libary 
const mongoose = require("mongoose")

// Setup the Schema
const Schema = mongoose.Schema

// Create the Schema
const bookSchema = new Schema({
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true // Removes leading and trailing whitespace
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true // Removes leading and trailing whitespace
    },
    genre: {
      type: String,
      required: [true, 'Genre is required'],
      trim: true // Removes leading and trailing whitespace
    },
    status: {
      type: String,
      enum: {
        values: ['to read', 'currently reading', 'finished'],
        message: 'Status must be either "to-read", "currently reading", or "finished"'
      },
      required: [true, 'Status is required'],
      default: 'to read'
    }
  },{timestamps: true});
  
  module.exports = mongoose.model('Book', bookSchema);
  
  
  