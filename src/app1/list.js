import React from "react";

const List = ({ data }) => {

    return (
        <>
            {
                data.map(item => {
                    return < div key={item.id} className="box" >
                        <div className="img">
                            <img src={item.image} />
                        </div>
                        <div className="info">
                            <p>{item.name}</p>
                            <p>{item.age} years</p>
                        </div>
                    </div >
                })
            }
        </>
    )
}

export default List;
