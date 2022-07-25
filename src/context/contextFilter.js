import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { reduce } from "../reduce/reducerFiltter";
import { useReducer } from 'react';
import { useGlobalContext } from './ContextProduct';


let initState = {
    all_products: [],
    filtered_products: [],
    gridView: true,
    listView: false,
    sort: "price-lowest"
}

let AppContextFilter = React.createContext()


const AppProviderFilter = ({ children }) => {
    let [state, dispatch] = useReducer(reduce, initState)
    let { products } = useGlobalContext()


    let myGridView = () => {
        dispatch({ type: "SET_GRID_VIWE" })
    }

    let myListView = () => {
        dispatch({ type: "SET_LIST_VIWE" })
    }

    let sortUpdate = (e) => {
        let value = e.target.value
        dispatch({ type: "SORT_UPDATE", value })
    }

    useEffect(() => {
        dispatch({ type: "GET_ALL_PRODUCTS", payload: products })
    }, [products]);

    useEffect(() => {
        dispatch({ type: "SORT_PRODUCTS" })
    }, [products, state.sort]);

    return (
        <AppContextFilter.Provider value={{ ...state, myListView, myGridView, sortUpdate }}>
            {children}
        </AppContextFilter.Provider>
    );

}

export let useGlobalContextFilter = () => {
    return useContext(AppContextFilter)
}

export { AppProviderFilter, AppContextFilter };


