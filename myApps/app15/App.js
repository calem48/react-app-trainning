import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import SingleFilm from './singleFilm'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/film/:id' element={<SingleFilm />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;