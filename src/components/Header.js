// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="bg-blue-600 p-4 flex items-center justify-between">
            <Link to="/" className="text-white text-xl font-semibold">
                Book Tracker
            </Link>
            <div className="space-x-4">
                <Link to="/to-read" className="text-white hover:text-blue-200">
                    To Read
                </Link>
                <Link to="/reading" className="text-white hover:text-blue-200">
                    Reading
                </Link>
                <Link to="/read" className="text-white hover:text-blue-200">
                    Read
                </Link>
            </div>
        </nav>
    );
}
