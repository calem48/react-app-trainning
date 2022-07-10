import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/loading';
let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const SinglCocktail = () => {
    const [loading, setLoading] = useState(true);
    const [state, setstate] = useState(null);
    let { id } = useParams()
    let fetchData = async () => {
        let resp = await fetch(`${url}${id}`)
        let data = await resp.json()
        setstate(data.drinks)

        setLoading(false)

    }
    useEffect(() => {
        fetchData()
    }, []);

    if (loading) {
        return <Loading />
    }

    let { strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb } = state[0]

    return (

        < section className='section cocktail-section' >
            <Link to="/" className="btn btn-primary">Back to home</Link>
            <h2>{strDrink}</h2>
            <div className="drink">
                <img src={strDrinkThumb} alt={strDrink} />
                <div className="drink-info">
                    <p><span className="drink-data">name :</span> {strDrink}</p>
                    <p><span className="drink-data">Category  :</span> {strCategory}</p>
                    <p><span className="drink-data">Info  :</span> {strAlcoholic}</p>
                    <p><span className="drink-data">Glass   :</span> {strGlass}</p>
                    <p><span className="drink-data">Instructons   :</span> {strInstructions}</p>
                </div>
            </div>
        </section >
    );

}

export default SinglCocktail;
