import React from 'react';
import { useEffect, useState, useContext } from 'react';

import UseFetch from './useFetch'
let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

let appContext = React.createContext()

const AppContext = ({ children }) => {
    const [query, setQuery] = useState("batman");
    let { data: movies, error, loading } = UseFetch(`&s=${query}`)
    // console.log(movies);

    return (
        <appContext.Provider value={{ movies, loading, setQuery, query, error }}>
            {children}
        </appContext.Provider>
    );
}

export let useGlobalContext = () => {
    return useContext(appContext)
}

export { AppContext, appContext };
