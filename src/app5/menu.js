import React from 'react';

const Menu = ({ menu }) => {

    return (

        <div className="content">
            {
                menu.map(item => {
                    const { id, title, img, price, desc } = item
                    return (
                        < div className="box" key={id} >
                            <div className="image">
                                <img src={img} />
                            </div>
                            <div className="info">
                                <div className="head">
                                    <h3>{title}</h3>
                                    <span>{price}</span>
                                </div>
                                <p>{desc}</p>
                            </div>
                        </div >
                    )
                })
            }
        </div>

    );
}

export default Menu;
