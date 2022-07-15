import React from 'react';
import { useEffect, useState } from 'react';

let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`


const UseFetch = (urlParams) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState({ type: "", msg: "" });

    let fetchMovie = async (url) => {

        setLoading(true)
        let resp = await fetch(url)
        let data = await resp.json()

        if (data.Response === "True") {
            setData(data.Search || data)
            setError({ type: false, msg: "" })
        } else {
            setError({ type: true, msg: data.Error })
        }

        setLoading(false)

    }
    useEffect(() => {
        fetchMovie(`${url}${urlParams}`)
    }, [urlParams]);

    return { loading, error, data }
}
export default UseFetch;
