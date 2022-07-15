import React from 'react';
import { useGlobalContext } from "./context"

const Search = () => {
    let { stories: { nbPages }, setQuery, query } = useGlobalContext()

    return (
        <form className="search-form">
            <h2>search hacker news</h2>
            <input type="text" className="form-input" onChange={(e) => setQuery(e.target.value)} value={query} />
        </form>
    );
}

export default Search;
