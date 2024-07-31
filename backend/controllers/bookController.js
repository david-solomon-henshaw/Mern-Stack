const booksModel = require('../models/booksModel')
const mongoose = require ('mongoose')

const getAllBooks = async (req, res) => {
    try {
        const books = await booksModel.find({}).sort({ createdAt: -1 })
        res.status(200).json({ books })
    }
    catch (error) {
        res.status(400).json({ error: error })
    }
}


const createBook = async (req, res) => {

    try {
        const { title, author, genre, status } = req.body
        const book = await booksModel.create({ title, author, genre, status })
        res.status(200).json({ book })
    } catch (error) {
        res.status(400).json({ error: error })
    }
}


const getBook = async (req,res) => {

    try {
        const{id} = req.params

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({error: "Invalid book ID"})
        }

        const book = await booksModel.findById(id)

        if(!book) {
            return res.status(404).json({error: "Book not found"})
        }
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({error: "something is Wrong"})
    }
}


const deleteBook = async (req,res) => {

    try {
        const {id} = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({error: "Id is Invalid"})
        }

        const book = await booksModel.findOneAndDelete({_id: id})

        if(!book) {
            return res.status(404).json({error: 'No such book with id'})
        }

        res.status(200).json({message: "book deleted successfully from database"})

    } catch (error) {
        res.status(500).json({error: "An Error Occured"})
    }
}

const updateBook = async (req,res) => {
    try {
        const {id} = req.params
        const update = {...req.body}

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({error: "Id is Invalid"})
        }

        const book = await booksModel.findOneAndUpdate({_id: id}, update)

        if(!book) {
            return res.status(404).json({error: 'No such book with id'})
        }

        res.status(200).json({message: update})

    } catch (error) {
        res.status(500).json({error: "An Error Occured"})
    }
}

module.exports = {
    getAllBooks,
    createBook,
    getBook,
    deleteBook,
    updateBook
}