require('dotenv').config()

// Require Book Model

// require express package
const express = require('express')

//require mongoose
const mongoose = require('mongoose')

//express app
const app = express()

// accessing body contents middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const booksRouter = require('./routes/books')


//middleware logger
app.use((req,res,next) => {
    console.log(req.url,req.method);
    next()
})


app.use('/api/books', booksRouter)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port 4000 and connected to the database');
        })
    })
    .catch((error) => {
        console.log(error)
    })

