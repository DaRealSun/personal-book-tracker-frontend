// src/components/Home.js

import React, { useEffect, useState } from 'react';
import BookService from '../services/BookService';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await BookService.getAllBooks();
            setBooks(response.data);
            setLoading(false);
        } catch (err) {
            setError('Error fetching books');
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
            <h1>All Books</h1>
            <ul>
                {books.map(book => (
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

export default Home;
