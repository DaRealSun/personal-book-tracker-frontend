// src/pages/ToRead.js
import React, { useState, useEffect } from 'react';
import { fetchBooksByStatus, updateBookStatus } from '../services/bookService';

const ToRead = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        try {
            const data = await fetchBooksByStatus('TO_READ');
            setBooks(data);
        } catch (err) {
            console.error('Error fetching TO_READ books:', err);
        }
    };

    const handleAddReading = async (bookId) => {
        try {
            await updateBookStatus(bookId, 'READING');
            alert('Book added to Reading!');
            loadBooks();
        } catch (err) {
            console.error('Error updating status:', err);
        }
    };

    const handleRemove = async (bookId) => {
        try {
            await updateBookStatus(bookId, 'NONE'); // or 'REMOVED'
            alert('Book removed from ToRead list');
            loadBooks();
        } catch (err) {
            console.error('Error removing book from ToRead:', err);
        }
    };

    return (
        <div>
            <h1>To Read</h1>
            {books.length === 0 ? (
                <p>No books to read.</p>
            ) : (
                books.map((book) => (
                    <div key={book.id} style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <button onClick={() => handleAddReading(book.id)}>Add to Reading</button>
                        {' '}
                        <button onClick={() => handleRemove(book.id)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default ToRead;
