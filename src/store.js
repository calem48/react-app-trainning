import { configureStore } from "@reduxjs/toolkit";
import SliceReducer from "./features/modal/SliceModal";
import cartReducer from "./features/CartSlice";



export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: SliceReducer
    }
})





