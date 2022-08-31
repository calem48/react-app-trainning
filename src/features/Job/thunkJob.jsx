import { authHeader } from "../../utils/authHeader"
import customFetch from "../../utils/axios"
import { getAllJobs, hideLoading, showLoading } from "../AllJobs/AllJobsSlice"
import { logOutUser } from "../user/userSlice"
import { clearValue } from "./JobSlice"



export let addJobThunk = async (data, thunkAPI) => {

    try {
        let resp = await customFetch.post('/jobs', data, authHeader(thunkAPI))
        thunkAPI.dispatch(clearValue())
        console.log(resp.data);
        return resp.data
    } catch (error) {
        if (error.response.status === 401) {
            thunkAPI.dispatch(logOutUser())
            return thunkAPI.rejectWithValue("unauthorized logout")
        }
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
}

export let deleteDjobThunk = async (jobId, thunkAPI) => {
    thunkAPI.dispatch(showLoading())
    try {
        let resp = await customFetch.delete(`/jobs/${jobId}`, authHeader(thunkAPI))
        thunkAPI.dispatch(getAllJobs())
        return resp.data
    } catch (error) {
        thunkAPI.dispatch(hideLoading())
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
}


export let editeJobThunk = async ({ jobId, job }, thunkAPI) => {
    try {
        let resp = await customFetch.patch(`/jobs/${jobId}`, job, authHeader(thunkAPI))
        thunkAPI.dispatch(clearValue())
        return resp.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
}