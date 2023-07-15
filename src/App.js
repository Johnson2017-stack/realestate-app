import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import AllProperties from './pages/AllProperties';
import Home from './pages/Home';
import Property from './pages/Property';



function App() {
  return (
  <Router>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/all-properties'>Properties</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/all-properties' element={<AllProperties />} /> 
        <Route path=':id' element={<Property />} />
    </Routes>
  </Router>
  );
}

export default App;
