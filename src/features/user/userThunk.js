
import customFetch from '../../utils/axios'
import { clearAllJobs } from '../AllJobs/AllJobsSlice'
import { clearValue } from '../Job/JobSlice'
import { logOutUser } from './userSlice'


export const registerThunk = async (url, user, thunkAPI) => {
    try {
        let { data } = await customFetch.post(url, user)
        return data

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
}


export const loginThunk = async (url, user, thunkAPI) => {
    try {
        let { data } = await customFetch.post(url, user)
        return data

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
}

export const updateUserThunk = async (url, data, thunkAPI) => {
    try {
        let resp = await customFetch.patch(url, data, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            }
        })
        return resp.data
    } catch (error) {

        if (error.response.status === 401) {
            thunkAPI.dispatch(logOutUser())
            return thunkAPI.rejectWithValue("unauthorazed login out ")
        }

        thunkAPI.rejectWithValue(error.response.data.msg)
    }
}

export const clearStoreThunk = async (msg, thunkAPI) => {
    console.log(msg);
    try {
        thunkAPI.dispatch(logOutUser(msg))
        thunkAPI.dispatch(clearAllJobs())
        thunkAPI.dispatch(clearValue())
        return Promise.resolve()
    } catch (error) {
        return Promise.reject()

    }
}



