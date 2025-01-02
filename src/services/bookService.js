// src/services/bookService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/book'; // adjust as needed

// GET books by status
export const fetchBooksByStatus = async (status) => {
    const res = await axios.get(`${BASE_URL}?status=${status}`);
    return res.data;
};

// UPDATE status
export const updateBookStatus = async (id, newStatus) => {
    // Expect { status: newStatus } in request body
    await axios.put(`${BASE_URL}/${id}`, { status: newStatus });
};
