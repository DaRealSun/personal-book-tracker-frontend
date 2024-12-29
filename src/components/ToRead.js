// src/components/ToRead.js

import React, { useEffect, useState } from 'react';
import BookService from '../services/BookService';

const ToRead = () => {
    const [toReadBooks, setToReadBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchToReadBooks();
    }, []);

    const fetchToReadBooks = async () => {
        try {
            const response = await BookService.getAllBooks();
            // Filter books with status 'TO_READ'
            const filteredBooks = response.data.filter(book => book.status === 'TO_READ');
            setToReadBooks(filteredBooks);
            setLoading(false);
        } catch (err) {
            setError('Error fetching To Read books');
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>To Read</h1>
            <ul>
                {toReadBooks.map(book => (
                    <li key={book.id}>
                        <h3>{book.title}</h3>
                        <p><strong>Author:</strong> {book.author}</p>
                        <p><strong>Category:</strong> {book.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToRead;
