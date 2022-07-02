import React from 'react';

const Category = ({ cate, filter }) => {
    console.log();
    return (
        <ul>
            {/* {

                cate.map((item, id) => {
                    return <button onClick={() => filter(item)} key={id}>{item}</button>
                })
            } */}
        </ul>
    );
}

export default Category;
