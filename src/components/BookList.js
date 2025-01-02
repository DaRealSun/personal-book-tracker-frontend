import React from 'react';
import BookCard from './BookCard';

export default function BookList({ books, onAddReading }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    book={book}
                    onAddReading={onAddReading}
                />
            ))}
        </div>
    );
}
