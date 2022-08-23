import { configureStore } from '@reduxjs/toolkit'
import AllJobsSlice from './features/AllJobs/AllJobsSlice';
import JobSlice from './features/Job/JobSlice';
import userReducer from "./features/user/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        job: JobSlice,
        allJobs: AllJobsSlice
    },
})