import React, { useState, useEffect } from 'react';
import { useBooks } from './BookContext';
import { toast } from 'react-toastify';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [status, setStatus] = useState('to read');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { addBook, editBook, setEditBook, updateBook } = useBooks(); // Access editBook and updateBook

  useEffect(() => {
    if (editBook) {
      setTitle(editBook.title);
      setAuthor(editBook.author);
      setGenre(editBook.genre);
      setStatus(editBook.status);
    } else {
      setTitle('');
      setAuthor('');
      setGenre('');
      setStatus('to read');
    }
  }, [editBook]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !author || !genre) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (editBook) {
        // Update existing book
        await updateBook({ ...editBook, title, author, genre, status });
        toast.success('Book updated successfully!');
      } else {
        // Add new book
        const newBook = { title, author, genre, status, createdAt: new Date().toISOString() };
        await addBook(newBook);
        toast.success('Book added successfully!');
      }
      setEditBook(null); // Exit edit mode
      setTitle('');
      setAuthor('');
      setGenre('');
      setStatus('to read');
    } catch (err) {
      setError('Failed to save the book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{editBook ? 'Edit Book' : 'Add a New Book'}</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            id="author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre</label>
          <input
            type="text"
            id="genre"
            className="form-control"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="to read">To Read</option>
            <option value="currently reading">Currently Reading</option>
            <option value="finished">Finished</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-success"
          disabled={loading}
        >
          {loading ? 'Saving...' : editBook ? 'Update Book' : 'Add Book'}
        </button>
        {editBook && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => setEditBook(null)}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default AddBookForm;
