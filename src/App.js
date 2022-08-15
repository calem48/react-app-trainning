import React from 'react';
import { Dashborad, Error, Register, Landing } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashborad />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer position='top-center' />
      </BrowserRouter>
    </>
  );

};

export default App;