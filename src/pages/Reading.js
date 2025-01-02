// src/pages/Reading.js
import React, { useState, useEffect } from 'react';
import { fetchBooksByStatus, updateBookStatus } from '../services/bookService';

const Reading = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        try {
            const data = await fetchBooksByStatus('READING');
            setBooks(data);
        } catch (err) {
            console.error('Error fetching READING books:', err);
        }
    };

    const handleRemove = async (bookId) => {
        try {
            await updateBookStatus(bookId, 'NONE'); // or 'TO_READ' to revert
            alert('Book removed from Reading');
            loadBooks();
        } catch (err) {
            console.error('Error removing from Reading:', err);
        }
    };

    const handleFinish = async (bookId) => {
        try {
            await updateBookStatus(bookId, 'READ');
            alert('Book marked as Read');
            loadBooks();
        } catch (err) {
            console.error('Error finishing book:', err);
        }
    };

    return (
        <div>
            <h1>Reading</h1>
            {books.length === 0 ? (
                <p>No books in Reading.</p>
            ) : (
                books.map((book) => (
                    <div key={book.id} style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <button onClick={() => handleRemove(book.id)}>Remove</button>
                        {' '}
                        <button onClick={() => handleFinish(book.id)}>Finished</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Reading;
