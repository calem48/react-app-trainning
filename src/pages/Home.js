import React from 'react';
import Cocktails from '../components/cocktails';
import SearchCocktails from '../components/searchCocktails';
const Home = () => {
    return (
        <>
            <SearchCocktails />
            <Cocktails />
        </>
    );
}

export default Home;
