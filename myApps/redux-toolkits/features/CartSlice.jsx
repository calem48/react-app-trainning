import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import { cart } from '../cartData';
let URL = "https://course-api.com/react-useReducer-cart-project"

// export const getItems = createAsyncThunk("cart/getItemCart", () => {
//     return fetch(URL)
//         .then(resp => resp.json())
//         .catch(error => console.log(error))
// })



const initialState = {
    cartItems: [],
    amount: 0,
    totale: 0,
    isLoading: false
}


export const getItems = createAsyncThunk("cart/getItemCart",
    async (name, thunkAPI) => {
        try {
            // console.log(thunkAPI);
            // console.log(thunkAPI.getState());
            // console.log(thunkAPI.dispatch());
            let { data } = await axios(URL)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue('something happened ')
        }
    }
)


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, action) => {
            let item = state.cartItems.find(item => item.id === action.payload)
            item.amount += 1
        },
        decrement: (state, action) => {
            let item = state.cartItems.find(item => item.id === action.payload)
            item.amount -= 1

        },

        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(i => {
                return i.id !== action.payload
            })
        },
        clearCart: (state) => {
            state.cartItems = []
            // return { cartItems: [] }
        },
        cartTotalePrice: (state) => {
            let total = 0
            let amount = 0
            state.cartItems.forEach(item => {
                amount += item.amount
                total += item.amount * item.price
            })

            state.amount = amount
            state.totale = total
        }

    },
    extraReducers: {
        [getItems.pending]: (state) => {
            state.isLoading = true
        },
        [getItems.fulfilled]: (state, action) => {
            console.log(action);
            state.isLoading = false
            state.cartItems = action.payload

        },
        [getItems.rejected]: (state, action) => {
            state.isLoading = false
            console.log(action);
        },

    }
})


export const { increment, decrement, clearCart, removeItem, cartTotalePrice } = cartSlice.actions

export default cartSlice.reducer