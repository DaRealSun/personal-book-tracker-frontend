import { useState, useEffect } from 'react';
import axios from 'axios';

const useBooks = (category) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`http://matrixweb.myftp.org:8080/book?category=${category}`)
            .then(res => setBooks(res.data))
            .catch(err => console.error('Error fetching books:', err));
    }, [category]);

    return books;
};

export default useBooks;
