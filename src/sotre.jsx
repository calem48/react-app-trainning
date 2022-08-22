import { configureStore } from '@reduxjs/toolkit'
import JobSlice from './features/Job/JobSlice';
import userReducer from "./features/user/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        job: JobSlice
    },
})