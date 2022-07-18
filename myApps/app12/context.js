import React, { useCallback, useContext, useEffect, useState } from 'react';
let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

let AppContext = React.createContext()
const AppProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    let fetchData = useCallback(async () => {
        try {
            let resp = await fetch(`${url}${search}`)
            let data = await resp.json()
            if (data.drinks) {
                setData(data.drinks)

            } else {
                setData([])

            }
            setLoading(false)
        } catch (error) {
            console.log(error);
        }

    }, [search])

    useEffect(() => {
        fetchData()

    }, [search, fetchData]);


    return (
        <AppContext.Provider value={{ data, loading, search, setSearch }} >
            {children}
        </AppContext.Provider>
    );
}

export let useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext };
