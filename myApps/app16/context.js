import React from 'react';
import { useEffect, useState, useContext, useReducer } from 'react';
import { reducer } from './reducer'
import { SET_LOADING, SET_STORY, REMOVE_STORY, HANDLE_PAGE, HANDLE_QUERY } from './actions'
let API_ENDPOINT = "http://hn.algolia.com/api/v1/search?"

let initState = {
    loading: true,
    stories: [],
    page: 0,
    query: "DRAGON BALL Z",
    nbPages: 0
}

let appContext = React.createContext()

const AppContext = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initState)

    let fetchStories = async (url) => {
        dispatch({ type: SET_LOADING })
        let resp = await fetch(url)
        let data = await resp.json()
        console.log(url);
        dispatch({ type: SET_STORY, payload: { data: data.hits, nbPages: data.nbPages } })
    }

    let handlePage = (data) => {
        dispatch({ type: HANDLE_PAGE, payload: data })
    }

    let handleQuery = (data) => {
        dispatch({ type: HANDLE_QUERY, payload: data })
    }


    useEffect(() => {
        fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)

    }, [state.query, state.page]);

    return (
        <appContext.Provider value={{ ...state, dispatch, handlePage, handleQuery }}>
            {children}
        </appContext.Provider >
    );
}

export let useGlobalContext = () => {
    return useContext(appContext)
}

export { AppContext, appContext };
