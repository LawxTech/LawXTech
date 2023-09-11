// Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom'; // Update the import

import Home from './pages/Home';
import About from './pages/About';
import Series from './pages/Series';
import Contact from './pages/Contact';

const Routes: React.FC = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Series />} />
        <Route path="/contact" element={<Contact />} />
      </ReactRoutes>
    </Router>
  )
}

export default Routes
