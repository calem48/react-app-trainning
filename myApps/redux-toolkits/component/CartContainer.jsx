import React from 'react';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../features/modal/SliceModal';

const CartContainer = () => {

    let { cartItems, totale, amount } = useSelector((state => state.cart))
    let dispatch = useDispatch()
    if (amount === 0) {
        return (
            <section className="cart">
                <header>
                    <h2>no items</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            {
                cartItems.map(item => {
                    return <CartItem key={item.id} {...item} />
                })
            }

            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total
                        <span>${totale}</span>
                    </h4>
                </div>

                <button
                    onClick={() => dispatch(openModal())}
                    className='btn clear-btn'>
                    clear cart
                </button>
            </footer>
        </section>
    );
}

export default CartContainer;
