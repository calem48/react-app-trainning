import React from 'react';
import { Error, Register, Landing, PrivateRouter } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddJobs, AllJobs, Profile, SharedLayoat, Stats } from './pages/dashborad';


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/"
            element={<PrivateRouter>
              <SharedLayoat />
            </PrivateRouter>}>
            <Route index element={<Stats />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="add-job" element={<AddJobs />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="landing" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer position='top-center' />
      </BrowserRouter>
    </>
  );

};

export default App;


