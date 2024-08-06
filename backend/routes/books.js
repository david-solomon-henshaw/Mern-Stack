// require express
const express = require('express')
// setup router and invoke it 
const router = express.Router()

// import the controller functions
const {getAllBooks, createBook, getBook, deleteBook, updateBook} =  require('../controllers/bookController')
const protect = require('../middleware/auth')


//Get all books
router.get('/',protect, getAllBooks )

// Create a new book
router.post('/', protect ,createBook)

//
router.get('/:id', protect,getBook)

router.delete('/:id',protect, deleteBook)

router.patch('/:id', protect ,updateBook)


// export router 
module.exports = router 
