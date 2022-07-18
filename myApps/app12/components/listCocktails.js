import React from 'react';
import { Link } from 'react-router-dom';

const ListCocktails = ({ data }) => {

    return (
        <>
            {
                data.map(item => {
                    return <article key={item.idDrink} className='cocktail'>
                        <div className="img-container">
                            <img src={item.strDrinkThumb} alt={item.strDrink} />
                        </div>
                        <div className="cocktail-footer">
                            <h3>{item.strDrink}</h3>
                            <h4>{item.strGlass}</h4>
                            <Link to={`/cocktails/${item.idDrink}`} className='btn btn-primary btn-details'>details</Link>
                        </div>
                    </article>
                })
            }

        </>
    );
}

export default ListCocktails;
