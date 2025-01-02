// src/pages/Read.js
import React, { useState, useEffect } from 'react';
import { fetchBooksByStatus } from '../services/bookService';

const Read = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadReadBooks();
    }, []);

    const loadReadBooks = async () => {
        try {
            const data = await fetchBooksByStatus('READ');
            setBooks(data);
        } catch (err) {
            console.error('Error fetching READ books:', err);
        }
    };

    return (
        <div>
            <h1>Finished (Read) Books</h1>
            {books.length === 0 ? (
                <p>No books read yet.</p>
            ) : (
                books.map((book) => (
                    <div key={book.id} style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Read;
