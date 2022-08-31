import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getUserLocalStorage } from "../../utils/localStorage";
import { addJobThunk, deleteDjobThunk, editeJobThunk } from "./thunkJob";


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


export let addJob = createAsyncThunk('job/addJob', addJobThunk)

export let deleteDjob = createAsyncThunk('job/deleteJob', deleteDjobThunk)

export let editeJob = createAsyncThunk('job/editeJob', editeJobThunk)


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
            console.log(payload);
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
            console.log(payload);
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