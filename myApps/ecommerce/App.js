import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, About, Product, Error, Cart, Check, SinglePageProduct } from './pages/index'
import { Header, Footer, Sidebar } from "./compenent/index";

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Product />} ></Route>
          <Route path='products/:id' element={<SinglePageProduct />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Check />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};


export default App;