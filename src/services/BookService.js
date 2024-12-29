// src/services/BookService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/book';

const getAllBooks = () => {
    return axios.get(API_URL);
};

const createBook = (book) => {
    return axios.post(API_URL, book);
};

// Add other CRUD operations as needed

const BookService = {
    getAllBooks,
    createBook,
    // ... other methods
};

export default BookService;
