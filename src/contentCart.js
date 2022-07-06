import React from 'react';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useGlobalContext } from './context';

const ContentCart = ({ id, title, price, img, amount }) => {
    let { removeItem, increse, descrese } = useGlobalContext()
    return (
        <div>
            <article className='cart-item'>
                <img
                    src={img}
                    alt={title}
                />
                <div>
                    <h4>{title}</h4>
                    <h4 className="item-price">${price}</h4>
                    <button onClick={() => removeItem(id)} className="remove-btn">remove</button>
                </div>
                <div>
                    <button onClick={() => increse(id)} className='amount-btn'><FaArrowUp /></button>
                    <p className="amount">{amount} </p>
                    <button onClick={() => descrese(id)} className='amount-btn'><FaArrowDown /></button>
                </div>
            </article>
        </div>
    );
}

export default ContentCart;
