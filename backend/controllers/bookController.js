const booksModel = require('../models/booksModel')
const mongoose = require ('mongoose')

const getAllBooks = async (req, res) => {
    try {
        const books = await booksModel.find({}).sort({ createdAt: -1 })
        res.status(200).json({ books })
    }
    catch (error) {
        res.status(400).json({ error: "error occurred while trying to get all books" })
    }
}


const createBook = async (req, res) => {

    try {
        const { title, author, genre, status } = req.body
        const book = await booksModel.create({ title, author, genre, status })
        res.status(200).json({ book })
    } catch (error) {
        res.status(400).json({ error: "error occured while trying to create a book" })
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
        res.status(500).json({error: "something is Wrong while trying to get a book"})
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
        res.status(500).json({error: "An Error Occured while trying to delete a book"})
    }
}
const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const update = { ...req.body };

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const book = await booksModel.findOneAndUpdate(
            { _id: id },
            update,
            { new: true } // Return the updated document
        );

        if (!book) {
            return res.status(404).json({ error: 'No book found with that ID' });
        }

        console.log('Updated book:', book); // Log the book to check the response
        res.status(200).json({ book });
    } catch (error) {
        console.error('Update error:', error); // Log error for debugging
        res.status(500).json({ error: "An error occurred while updating the book" });
    }
};


module.exports = {
    getAllBooks,
    createBook,
    getBook,
    deleteBook,
    updateBook
}