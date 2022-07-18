import React from 'react';
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context';
const ListFilm = () => {
    let { movies, loading, error } = useGlobalContext()
    console.log(movies);
    if (loading) {
        return <h1>loading ....</h1>
    }
    console.log(error);

    return (
        <section className='movies'>
            {
                movies.map(item => {
                    return (
                        <Link className='movie' key={item.imdbID} to={`/film/${item.imdbID}`}>
                            <article >
                                <img src={item.Poster} alt={item.Title} />
                                <div className="movie-info">
                                    <h4 className="title">{item.Title}</h4>
                                    <p>{item.Year}</p>
                                </div>
                            </article>
                        </Link>
                    )
                })
            }

        </section>
    );






}

export default ListFilm;
