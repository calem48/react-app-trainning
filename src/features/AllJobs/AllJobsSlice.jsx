import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";


let initFilterStates = {
    search: "",
    searchStatus: "all",
    searchType: "all",
    sort: ['latest', 'oldest', 'a-z', 'z-a'],
    sortDefaultValue: "all"
}

export let getAllJobs = createAsyncThunk('job/getAllJobs', async (_, thunkAPI) => {
    console.log('hhhhhhhhhhhhhhhhi');
    try {
        let resp = await customFetch.get('/jobs', {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`
            }
        })
        return resp.data

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})



let initialState = {
    isLoading: false,
    jobs: [],
    jobsTotal: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    ...initFilterStates
}


let allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true
        },
        hideLoading: (state) => {
            state.isLoading = false
        }
    },
    extraReducers: {
        [getAllJobs.pending]: (state) => {
            state.isLoading = true
        },
        [getAllJobs.fulfilled]: (state, { payload: { jobs } }) => {
            state.isLoading = false
            state.jobs = jobs
            console.log(jobs);
        },
        [getAllJobs.rejected]: (state, { payload }) => {
            state.isLoading = false
            toast.error(payload)
        }
    }
})

export let { showLoading, hideLoading } = allJobsSlice.actions
export default allJobsSlice.reducer


