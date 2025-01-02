import React from 'react';

const BookCard = ({ book, onAddReading }) => {
    const { title, author, category, status, imageUrl } = book;

    const handleAddReading = () => {
        if (onAddReading) {
            onAddReading(book.id);
        }
    };

    return (
        <div className="max-w-xs w-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Optional: Display a book cover or placeholder image */}
            <img
                src={imageUrl || 'https://via.placeholder.com/400x300?text=Book+Cover'}
                alt="Book Cover"
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 line-clamp-1">{title}</h3>
                <p className="text-gray-600 text-sm line-clamp-1 mb-2">
                    by {author}
                </p>

                <div className="flex items-center justify-between mb-2">
          <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded-full">
            {category}
          </span>
                    <span className="text-sm font-bold capitalize">
            {status || 'To Read'}
          </span>
                </div>

                <button
                    onClick={handleAddReading}
                    className="w-full bg-blue-500 text-white py-2 mt-2 text-sm font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Add to Reading
                </button>
            </div>
        </div>
    );
};

export default BookCard;
