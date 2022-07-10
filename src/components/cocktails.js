import React from 'react';
import ListCocktails from './listCocktails';
import { useGlobalContext } from '../context';
import Loading from './loading';
const Cocktails = () => {
    let { data, loading } = useGlobalContext()
    if (loading) {
        return <Loading />
    }

    if (data.length < 1) {
        return <h1 className='section-title'>nothing item matched ...</h1>
    }

    if (data.length) {
        return (
            <section className='section'>
                <h2 className="section-title">cocktails</h2>
                <div className="cocktails-center">
                    <ListCocktails data={data} />
                </div>
            </section>
        );
    }


}

export default Cocktails;
