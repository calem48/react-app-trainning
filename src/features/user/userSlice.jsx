import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { addUserLocalStorage, getUserLocalStorage, removeUserLocalStorage } from '../../utils/localStorage'
import { loginThunk, registerThunk, updateUserThunk } from './userThunk'

let initialState = {
    isLoading: false,
    isOpenSideBar: false,
    user: getUserLocalStorage()
}


export const registerUser = createAsyncThunk("user/registerUser", async (user, thunkAPI) => {
    return registerThunk('/auth/register', user, thunkAPI)
})


export const loginUser = createAsyncThunk("user/loginUser", async (user, thunkAPI) => {
    return loginThunk('/auth/login', user, thunkAPI)

})

export const updateUser = createAsyncThunk("user/update", async (data, thunkAPI) => {
    return updateUserThunk("/auth/updateUser", data, thunkAPI)
})








let userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        openSideBar: (state) => {
            state.isOpenSideBar = !state.isOpenSideBar
        },
        logOutUser: (state, payload) => {
            // state.isOpenSideBar = false
            state.user = null
            removeUserLocalStorage()
            if (payload) {
                toast.success(payload)
            }
        }

    },
    extraReducers: {
        /* register logic */
        [registerUser.pending]: (state) => {
            state.isLoading = true
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            addUserLocalStorage(payload.user)
            state.isLoading = false
            state.user = payload.user
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
            addUserLocalStorage(payload.user)
            state.isLoading = false
            state.user = payload.user
            toast.success("login successfully")
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false
            toast.error(payload)
        },

        /* update user */
        [updateUser.pending]: (state) => {
            state.isLoading = true;
        },
        [updateUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.user = payload.user
            addUserLocalStorage(payload.user)
            toast.success("user updated successfully")
        },
        [updateUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
    }
})

export let { openSideBar, logOutUser } = userSlice.actions
export default userSlice.reducer