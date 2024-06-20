// PRVO INSTALIRAMO U TERMINALU:'npm i react-router-dom'. NESTO VISE MOZEMO VIDETI NA LINKU: 'https://www.npmjs.com/package/react-router-dom'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Pages:
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
// import Components:
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
