
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ToRead from './components/ToRead';

import Navbar from './components/Navbar';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/to-read" element={<ToRead />} />

          </Routes>
        </div>
      </Router>
  );
}

export default App;
