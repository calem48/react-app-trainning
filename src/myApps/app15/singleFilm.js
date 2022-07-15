import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom"
import UseFetch from './useFetch'



const SingleFilm = () => {
    let { id } = useParams()
    let { data: movies, error, loading } = UseFetch(`&i=${id}`)

    if (loading) {
        return <h1>loading ...</h1>
    }

    if (error.type === "True") {
        <div className="page-error">
            <h1>{error.msg}</h1>
            <Link to="/"> go back home</Link>
        </div>
    }


    let { Poster, Title, Type, Year, Plot } = movies
    return (

        <section className="single-movie">
            <img src={Poster} alt={Title} />
            <div className="single-movie-info">
                <h2>{Type}</h2>
                <p>{Plot}.</p>
                <h4>{Year}</h4>
                <Link className="btn" to="/">back to movies</Link>
            </div>
        </section>



    );
}

export default SingleFilm;
