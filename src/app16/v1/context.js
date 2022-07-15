import React from 'react';
import { useEffect, useState, useContext } from 'react';

let API_ENDPOINT = "http://hn.algolia.com/api/v1/search?"

let appContext = React.createContext()

const AppContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [stories, setStories] = useState([]);
    const [page, setPage] = useState(0);
    const [query, setQuery] = useState('dragon ball z');

    let fetchStories = async () => {

        setLoading(true)
        let resp = await fetch(`${API_ENDPOINT}query=${query}&page=${page}`)
        let data = await resp.json()
        setStories(data)
        console.log(data);
        setLoading(false)
    }
    useEffect(() => {
        fetchStories()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, page]);

    return (
        <appContext.Provider value={{ loading, stories, query, setPage, page, setQuery }}>
            {children}
        </appContext.Provider >
    );
}

export let useGlobalContext = () => {
    return useContext(appContext)
}

export { AppContext, appContext };
