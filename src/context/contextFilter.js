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
    sort: "price-lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        colors: "all",
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false
    }
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

    let filterUpdate = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (name === "category") {
            value = e.target.textContent
        }
        if (name === "company") {
            value = e.target.value
        }

        if (name === "colors") {
            value = e.target.dataset.color
        }


        dispatch({ type: "FILTER_UPDATE", data: { name, value } })
    }

    useEffect(() => {
        dispatch({ type: "GET_ALL_PRODUCTS", payload: products })
    }, [products]);

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORT_PRODUCTS" })
    }, [products, state.sort, state.filters]);

    return (
        <AppContextFilter.Provider value={{ ...state, myListView, myGridView, sortUpdate, filterUpdate }}>
            {children}
        </AppContextFilter.Provider>
    );

}

export let useGlobalContextFilter = () => {
    return useContext(AppContextFilter)
}

export { AppProviderFilter, AppContextFilter };


