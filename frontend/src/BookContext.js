import React, { createContext, useState, useCallback, useContext } from 'react';
import axios from 'axios';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editBook, setEditBook] = useState(null);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:4000/api/books');
      setBooks(response.data.books);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:4000/api/books/${bookId}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  const updateBook = async (updatedBook) => {
    try {
        const response = await axios.patch(`http://localhost:4000/api/books/${updatedBook._id}`, updatedBook);
        
        // Use the updated book object from the response
        const updatedBookData = response.data.book;
        
        // Update the book in the state with the new data
        setBooks((prevBooks) => 
            prevBooks.map((book) => (book._id === updatedBookData._id ? updatedBookData : book))
        );
        setEditBook(null); // Clear the edit form or handle as needed
    } catch (err) {
        setError(err);
        throw err;
    }
};

  

  const addBook = async (newBook) => {
    try {
      const response = await axios.post('http://localhost:4000/api/books', newBook);
      setBooks((prevBooks) => [...prevBooks, response.data.book]);
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  return (
    <BookContext.Provider value={{ books, loading, error, fetchBooks, deleteBook, editBook, setEditBook, updateBook, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);
