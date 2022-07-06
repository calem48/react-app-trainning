import React from 'react';
import ContentCart from './contentCart';
import { useGlobalContext } from './context';
const Cart = () => {
    let { items, totale, clearCart } = useGlobalContext()
    if (items.length === 0) {
        return (
            <section className="cart">
                <header>
                    <h2>your bag</h2>
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
                items.map(item => {
                    return <ContentCart key={item.id} {...item} />
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

                <button onClick={clearCart} className='btn clear-btn'>clear cart </button>
            </footer>

        </section>



    );
}

export default Cart;
