// require express
const express = require('express')
// setup router and invoke it 
const router = express.Router()

// import the controller functions
const {getAllBooks, createBook, getBook, deleteBook, updateBook} =  require('../controllers/bookController')
// import books model 
const booksModel = require('../models/booksModel')


//Get all books
router.get('/', getAllBooks )

// Create a new book
router.post('/', createBook)

//
router.get('/:id', getBook)

router.delete('/:id', deleteBook)

router.patch('/:id', updateBook)


// export router 
module.exports = router 
