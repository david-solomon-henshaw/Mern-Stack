import React, { useEffect } from 'react';
import { useBooks } from './BookContext';
import AddBookForm from './AddBookForm';
import NavbarComponent from './NavbarComponent';
import BookCard from './BookCard';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { books, loading, error, fetchBooks, deleteBook, setEditBook } = useBooks();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleEdit = (book) => {
    setEditBook(book);
  };

  const handleDelete = async (bookId) => {
    try {
      await deleteBook(bookId);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div className="container mt-4"><p>Loading...</p></div>;
  if (error) return <div className="container mt-4"><p>Error loading data: {error.message}</p></div>;

  return (
    <div>
      <NavbarComponent />
      <div className="container mt-4">
        <AddBookForm />
        <h1 className="mb-4">Books</h1>
        <div className="row mt-4">
          {books.map((book) => (
            <div className="col-md-4 mb-4" key={book._id}>
              <BookCard 
                book={book} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
              />
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
