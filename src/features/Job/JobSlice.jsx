import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getUserLocalStorage } from "../../utils/localStorage";
import { getAllJobs, hideLoading, showLoading } from "../AllJobs/AllJobsSlice";
import { logOutUser } from "../user/userSlice";

let initialState = {
    isLoading: false,
    position: '',
    company: '',
    jobLocation: '',
    jobTypeStatus: ['full-time', 'part-time', 'remote', 'internship'],
    jobType: 'full-time',
    statusOptions: ['interview', 'declined', 'pending'],
    status: 'pending',
    isEdit: false,
    editJobId: ""
}


export let addJob = createAsyncThunk('job/addJob', async (data, thunkAPI) => {
    try {
        let resp = await customFetch.post('/jobs', data, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            }
        })
        thunkAPI.dispatch(clearValue())
        return resp.data
    } catch (error) {
        if (error.response.status === 401) {
            thunkAPI.dispatch(logOutUser())
            return thunkAPI.rejectWithValue("unauthorized logout")
        }
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export let deleteDjob = createAsyncThunk('job/deleteJob', async (jobID, thunkAPI) => {
    thunkAPI.dispatch(showLoading())
    try {
        let resp = await customFetch.delete(`/jobs/${jobID}`, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            }
        })
        thunkAPI.dispatch(getAllJobs())
        return resp.data
    } catch (error) {
        thunkAPI.dispatch(hideLoading())
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
})


export let editeJob = createAsyncThunk('job/editeJob', async ({ jobID, job }, thunkAPI) => {
    try {
        let resp = await customFetch.patch(`/jobs/${jobID}`, job, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            }
        })
        thunkAPI.dispatch(clearValue())
        return resp.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
})


let jobSlice = createSlice({
    name: "Job",
    initialState,
    reducers: {
        handleChange: (state, { payload }) => {
            state[payload.name] = payload.value
        },
        clearValue: () => {
            return {
                ...initialState, jobLocation: getUserLocalStorage()?.location || ""
            }

        },
        editJob: (state, { payload }) => {
            return { ...state, isEdit: true, ...payload }
        }
    },
    extraReducers: {
        [addJob.pending]: (state) => {
            state.isLoading = true
        },
        [addJob.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            toast.success("updated successfully")
        },
        [addJob.rejected]: (state, { payload }) => {
            state.isLoading = false
            toast.error(payload)
        },
        [deleteDjob.fulfilled]: (state, { payload }) => {
            toast.success(payload.msg)
        },
        [deleteDjob.rejected]: (state, { payload }) => {
            toast.error(payload)
        },
        [editeJob.pending]: (state) => {
            state.isLoading = true
        },
        [editeJob.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            toast.success("edit successfully")
        },
        [editeJob.rejected]: (state, { payload }) => {
            state.isLoading = false
            toast.error(payload)
        },
    }
})
export let { handleChange, clearValue, editJob } = jobSlice.actions
export default jobSlice.reducer