import React from 'react';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { increment, decrement, removeItem } from '../features/CartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, title, price, amount, img }) => {
    let dispatch = useDispatch()
    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button onClick={() => dispatch(removeItem(id))} className="remove-btn">remove</button>
            </div>
            <div>
                <button onClick={() => dispatch(increment(id))} className="amount-btn"><FaArrowUp /></button>
                <p className="amount">{amount}</p>
                <button onClick={() => {
                    if (amount === 1) {
                        dispatch(removeItem(id))
                        return
                    }
                    dispatch(decrement(id))
                }

                } className="amount-btn"><FaArrowDown /></button>
            </div>
        </article >
    );
}

export default CartItem;
