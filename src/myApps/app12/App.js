import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error';
import SearchCocktails from './components/searchCocktails';
import SinglCocktail from './pages/singlCocktail';
function App() {


  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cocktails/:id' element={<SinglCocktail />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};


export default App;