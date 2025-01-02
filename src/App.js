// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ToRead from './pages/ToRead';
import Reading from './pages/Reading';
import Read from './pages/Read';
import Header from './components/Header'; // example nav bar
import './index.css'; // <-- Import the file containing Tailwind directives

function App() {
    return (
        <Router>
            <Header />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/to-read" element={<ToRead />} />
                    <Route path="/reading" element={<Reading />} />
                    <Route path="/read" element={<Read />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
