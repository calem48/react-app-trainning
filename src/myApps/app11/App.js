import React from 'react';
import Navbar from './navbar';
import Cart from './cart'
import { useGlobalContext } from './context';
function App() {
  let { loading } = useGlobalContext()

  if (loading) {
    return <div className='loading'>
      <h1>Loading...</h1>
    </div>
  }

  return (
    <>
      <Navbar />
      <Cart />
    </>
  );
};


export default App;