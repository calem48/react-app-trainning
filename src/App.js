import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashborad from './pages/dashborad'
import Login from './pages/login'
import Error from './pages/error'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashborad />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};


export default App;