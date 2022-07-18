import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
    let { setQuery, query, error } = useGlobalContext()

    return (
        <form className="search-form" >
            <h2>search movies</h2>
            <input type="text" className="form-input" onChange={e => setQuery(e.target.value)} />
            {error.type && <div className="error">{error.msg}</div>}
        </form>
    );
}

export default SearchForm;
