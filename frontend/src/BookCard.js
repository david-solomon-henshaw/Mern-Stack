import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons

const BookCard = ({ book, onEdit, onDelete }) => {
  return (
    <div className="book-card">
      <div className="book-card-content">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <div className="book-details">
          <span className={`book-genre ${book.genre.toLowerCase().replace(/\s+/g, '-')}`}>
            {book.genre}
          </span>
          <span className={`book-status ${book.status.toLowerCase().replace(/\s+/g, '-')}`}>
            {book.status}
          </span>
        </div>
        <p className="book-date">Added on {new Date(book.createdAt).toLocaleDateString()}</p>
        <div className="book-actions">
          <button className="btn btn-sm btn-primary" onClick={() => onEdit(book)}>
            <FaEdit /> Edit
          </button>
          <button className="btn btn-sm btn-danger" onClick={() => onDelete(book._id)}>
            <FaTrash /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
