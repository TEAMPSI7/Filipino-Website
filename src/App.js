// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Sining from './pages/Sining';
import Pagbasa from './pages/Pagbasa';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Pagbasa" element={<Pagbasa />} />
        <Route path="/Sining" element={<Sining />} />
      </Routes>
    </Router>
  );
};

export default App;
