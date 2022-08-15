import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch from '../../utils/axios'
import { addUserLocalStorage, getUserLocalStorage } from '../../utils/localStorage'

let initialState = {
    isLoading: false,
    user: getUserLocalStorage()
}

export const registerUser = createAsyncThunk("user/registerUser", async (user, thunkAPI) => {

    try {
        let { data } = await customFetch.post('/auth/register', user)
        return data

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }

})


export const loginUser = createAsyncThunk("user/loginUser", async (user, thunkAPI) => {
    try {
        let { data } = await customFetch.post('/auth/login', user)
        return data

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }

})

let userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        /* register logic */
        [registerUser.pending]: (state) => {
            state.isLoading = true
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            addUserLocalStorage(payload)
            state.isLoading = false
            state.user = payload
            toast.success("register successfully")
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false
            toast.error(payload)
        },
        /* login logic */
        [loginUser.pending]: (state) => {
            state.isLoading = true
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            addUserLocalStorage(payload)
            state.isLoading = false
            state.user = payload.user
            toast.success("login successfully")
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false
            toast.error(payload)
        }
    }
})

// export let { } = userSlice.actions
export default userSlice.reducer