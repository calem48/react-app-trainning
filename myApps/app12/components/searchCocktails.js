import React from 'react';
import { useGlobalContext } from '../context';


const SearchCocktails = () => {
    let { setSearch } = useGlobalContext()
    let search = React.useRef()
    let searchCocktails = () => {
        setSearch(search.current.value)
    }
    return (
        <main>
            <section className='section search'>
                <form className='search-form'>
                    <div className="form-control">
                        <label>search your favorite cocktail</label>
                        <input ref={search} type="text" id='name' name='name' onChange={searchCocktails} />
                    </div>
                </form>
            </section>
        </main>
    );
}

export default SearchCocktails;
