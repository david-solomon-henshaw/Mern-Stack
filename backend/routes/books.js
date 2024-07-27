// require express
const express = require('express')
// setup router and invoke it 
const router = express.Router()
// setup routes for when requests come in


//Get all books
router.get('/', (req,res) => {
    res.json({ msg : "Welcome all books"})

})

// Create a new Workout
router.post('/books', (req,res) => {
    
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
