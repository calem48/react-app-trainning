import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";


let initFilterStates = {
    search: "",
    searchStatus: "all",
    searchType: "all",
    sortDefaultValue: "latest",
    sortOption: ['latest', 'oldest', 'a-z', 'z-a']
}


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

export let getAllJobs = createAsyncThunk('AllJob/getAllJobs', async (_, thunkAPI) => {
    let { search, searchStatus, sortDefaultValue, searchType, page } = thunkAPI.getState().allJobs
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sortDefaultValue}&page=${page}`
    if (search) {
        url = url + `&search=${search}`
    }

    try {
        let resp = await customFetch.get(url, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`
            }
        })
        return resp.data

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export let getAllStats = createAsyncThunk('AllJob/getAllStats', async (_, thunkAPI) => {
    try {
        let resp = await customFetch.get("/jobs/stats", {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`
            }
        })

        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})





let allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true
        },
        hideLoading: (state) => {
            state.isLoading = false
        },
        handleChange: (state, { payload: { name, value } }) => {
            state.page = 1
            state[name] = value

        },
        clearShearch: (state) => {
            return { ...state, ...initFilterStates }
        },
        changePage: (state, { payload }) => {
            state.page = payload
        },
        clearAllJobs: () => {
            return initialState
        }
    },
    extraReducers: {
        [getAllJobs.pending]: (state) => {
            state.isLoading = true
        },
        [getAllJobs.fulfilled]: (state, { payload: { jobs, totalJobs, numOfPages } }) => {
            state.isLoading = false
            state.jobs = jobs
            state.jobsTotal = totalJobs
            state.numOfPages = numOfPages
        },
        [getAllJobs.rejected]: (state, { payload }) => {
            state.isLoading = false
            toast.error(payload)
        },
        [getAllStats.pending]: (state) => {
            state.isLoading = true
        },
        [getAllStats.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.stats = payload.defaultStats
            state.monthlyApplications = payload.monthlyApplications
        },
        [getAllStats.rejected]: (state, { payload }) => {
            state.isLoading = false
            toast.error(payload)
        },




    }
})

export let { showLoading, hideLoading, handleChange, clearShearch, changePage, clearAllJobs } = allJobsSlice.actions
export default allJobsSlice.reducer


