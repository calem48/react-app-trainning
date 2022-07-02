import React from 'react';

const List = ({ items, remove, update }) => {

    return (
        <div className='grocery-container'>
            <div className="grocery-list">
                {
                    items.map((item) => {
                        return <article key={item.id} className='grocery-item'>
                            <p className='title'>{item.title}</p>
                            <div className='btn-container'>
                                <button onClick={() => update(item.id)} className='edit-btn'><i className="fa-solid fa-pen-to-square"></i></button>
                                <button onClick={() => remove(item.id)} className='delete-btn'><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </article>
                    })
                }
            </div>
        </div>
    );
}

export default List;
