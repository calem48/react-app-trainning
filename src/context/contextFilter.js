import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { reduce } from "../reduce/reducerFiltter";
import { useReducer } from 'react';
import { useGlobalContext } from './ContextProduct';


let initState = {
    all_products: [],
    filtered_products: [],
    gridView: false,
    listView: false
}

let AppContextFilter = React.createContext()


const AppProviderFilter = ({ children }) => {
    let [state, dispatch] = useReducer(reduce, initState)
    let { products } = useGlobalContext()


    let gridView = () => {
        dispatch({ type: "SET_GRID_VIWE" })
    }

    let listView = () => {
        dispatch({ type: "SET_LIST_VIWE" })
    }


    useEffect(() => {
        dispatch({ type: "GET_ALL_PRODUCTS", payload: products })
    }, [products]);

    return (
        <AppContextFilter.Provider value={{ ...state }}>
            {children}
        </AppContextFilter.Provider>
    );

}

export let useGlobalContextFilter = () => {
    return useContext(AppContextFilter)
}

export { AppProviderFilter, AppContextFilter };


