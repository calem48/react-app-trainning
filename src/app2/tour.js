import React from 'react';
import { useState } from 'react';

const Tour = ({ id, image, info, price, remove }) => {

    const [readMore, setReadMore] = useState(false);
    return (
        <article className="single-tour">
            <img src={image} />
            <footer>
                <div className="tour-info">
                    <h4>Best Of Paris In 7 Days Tour</h4>
                    <h4 className="tour-info">${price}</h4>
                </div>
                <p>
                    {
                        readMore ? info : `${info.substring(0, 200)}...`
                    }
                    <button onClick={() => setReadMore(!readMore)}>{readMore ? "show less" : "read more"}</button>
                </p>
                <button onClick={() => remove(id)} className="delete-btn">not interested</button>
            </footer>
        </article>
    );
}

export default Tour;




