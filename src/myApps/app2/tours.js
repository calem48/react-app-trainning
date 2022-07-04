import React from 'react';
import Tour from './tour';
const Tours = ({ tour, remove }) => {
    return (
        <div>
            {
                tour.map(item => {
                    return <Tour key={item.id} {...item} remove={remove} />
                    // return <Tour key={item.id} item={item} remove={hide} />
                })
            }
        </div>
    );
}

export default Tours;
