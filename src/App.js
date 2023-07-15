import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import AllProperties from './pages/AllProperties';
import Home from './pages/Home';



function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/All-Properties' element={<AllProperties />} /> 
    </Routes>
  </Router>
  );
}

export default App;
