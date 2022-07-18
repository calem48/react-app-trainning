import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashborad from './pages/dashborad'
import Login from './pages/login'
import Error from './pages/error'
import PrivateRoute from './pages/PrivateRoute';
import AuthWrapper from './compenent/authWrapper'

function App() {


  return (
    <>

      <AuthWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <PrivateRoute >
                <Dashborad />
              </PrivateRoute>
            } />


            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AuthWrapper>
    </>
  );
};


export default App;