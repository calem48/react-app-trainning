import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import Sharedlayoat from './pages/SharedLayoat'
import SingleProduct from './pages/SingleProduct'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProtectedRoute from './pages/protectedRoute'
import SharedProductsLayoat from './pages/sharedProductsLayoat'


function App() {
  const [state, setState] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sharedlayoat />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path="products" element={<SharedProductsLayoat />}>
              <Route index element={<Products />} />
              <Route path=':productId' element={<SingleProduct />} />
            </Route>

            <Route path='dashboard'
              element={
                <ProtectedRoute user={state}>
                  <Dashboard user={state} />
                </ProtectedRoute>
              }
            />



            <Route path='login' element={<Login setUser={setState} />} />

            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};


export default App;