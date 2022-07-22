import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { reduce } from "../reduce/reduceProducts";
import { useReducer } from 'react';

const products_url = 'https://course-api.com/react-store-products'

let initState = {
    isSidebarOpen: false,
    isLoading: true,
    Error_Products: false,
    Featrued_Products: [],
    products: [],
    single_product_loading: true,
    single_product_error: false,
    single_product: {}

}

let AppContext = React.createContext()


const AppProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reduce, initState)

    // fetch data
    let fetchProducts = async (url) => {

        dispatch({ type: "GET_PRODUCTS_BEGIN" })

        try {
            let { data } = await axios(`${url}`)
            dispatch({ type: "GET_PRODUCTS_SUCCESS", data })

        } catch (error) {
            dispatch({ type: "GET_PRODUCTS_ERROR" })
        }
    }

    let fetchSinglProduct = async (url) => {
        dispatch({ type: "GET_SINGLE_PRODUCT_BEING" })

        try {
            let { data } = await axios(`${url}`)
            dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", data })
        } catch (error) {
            dispatch({ type: "GET_SINGLE_PRODUCT_ERROR" })

        }

    }

    // function for open side Bar
    let openSideBar = () => {
        dispatch({ type: "OPEN_SIDE_BARE" })
    }

    let closeSidebar = () => {
        dispatch({ type: "CLOSE_SIDE_BARE" })
    }

    useEffect(() => {
        fetchProducts(`${products_url}`)
    }, []);

    return (
        <AppContext.Provider value={{ ...state, openSideBar, closeSidebar, fetchSinglProduct }}>
            {children}
        </AppContext.Provider>
    );

}

export let useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext };
