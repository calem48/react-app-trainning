import React, { useContext, useEffect, useReducer } from 'react';
import cartItems from './data'
import reducer from './reduce'
const url = 'https://course-api.com/react-useReducer-cart-project'
let AppContext = React.createContext()

let initState = {
    loading: false,
    items: cartItems,
    amount: 0,
    totale: 0
}


const AppProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initState)

    let clearCart = () => {
        dispatch({ type: "CLEAR_ITEMS" })
    }

    let removeItem = (id) => {
        dispatch({ type: "REMOVE-ITEM", id })
    }

    let increse = (id) => {
        dispatch({ type: "INCRESE", id })
    }
    let descrese = (id) => {
        dispatch({ type: "DESCRESE", id })
    }

    let fetchData = async () => {
        dispatch({ type: "LOADING" })
        let res = await fetch(url)
        let data = await res.json(res)
        dispatch({ type: "DISPLAY-ITEMS", data })
        return data
    }
    useEffect(() => {
        fetchData()

    }, []);

    useEffect(() => {
        dispatch({ type: 'GET_TOTAL' })

    }, [state.items]);
    return (
        <AppContext.Provider value={{ ...state, clearCart, removeItem, increse, descrese }}>
            {children}
        </AppContext.Provider>
    );

}

export let useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext };
