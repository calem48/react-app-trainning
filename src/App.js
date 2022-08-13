import React from 'react';
import Navbar from './component/Navbar';
import CartContainer from "./component/CartContainer"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { cartTotalePrice, getItems } from './features/CartSlice';
import Modal from './component/Modal';

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(cartTotalePrice())
  }, [cartItems]);

  useEffect(() => {
    dispatch(getItems("for test"))
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>loading ....</h1>
      </div>
    )
  }

  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );

};

export default App;