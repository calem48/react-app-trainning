import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getUserLocalStorage } from "../../utils/localStorage";
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
    isEdit: false
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

let jobSlice = createSlice({
    name: "Job",
    initialState,
    reducers: {
        handleChange: (state, { payload }) => {
            console.log(payload);
            state[payload.name] = payload.value
        },
        clearValue: () => {
            return {
                ...initialState, jobLocation: getUserLocalStorage()?.location || ""
            }

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
    }
})
export let { handleChange, clearValue } = jobSlice.actions
export default jobSlice.reducer