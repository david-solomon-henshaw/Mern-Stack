// require express
const express = require('express')
// setup router and invoke it 
const router = express.Router()


// import books model 
const booksModel = require('../models/booksModel')


//Get all books
router.get('/', (req,res) => {
    res.json({ msg : "Welcome all books"})

})

// Create a new book
router.post('/', async (req,res) => {
    
    try {
        const {title,author,genre,status} = req.body
        const Book = await booksModel.create({title,author,genre,status})
        res.status(200).json(Book)
    } catch (error) {
        res.status(400).json({msg : error.message})
    }
})

//
router.get('/:id', (req,res) => {
    
})

router.delete('/:id', (req,res) => {
    
})

router.patch('/:id', (req,res) => {
    
})


// export router 
module.exports = router 
