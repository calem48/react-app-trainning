import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { reduce } from "../reduce/reduceProducts";
import { useReducer } from 'react';
const products_url = 'https://course-api.com/react-store-products'

let initState = {
    isSidebarOpen: false,
    isLoading: true,
    products: []
}

let AppContext = React.createContext()


const AppProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reduce, initState)

    let fetchProducts = async (url) => {
        let { data } = await axios(url)
        dispatch({ type: "GET_PRODUCTS_BEGIN", data })
    }

    let openSideBar = () => {
        dispatch({ type: "OPEN_SIDE_BARE" })
    }

    let closeSidebar = () => {
        dispatch({ type: "CLOSE_SIDE_BARE" })
    }

    useEffect(() => {
        fetchProducts(products_url)
    }, []);
    return (
        <AppContext.Provider value={{ ...state, openSideBar, closeSidebar }}>
            {children}
        </AppContext.Provider>
    );
}

export let useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext };
