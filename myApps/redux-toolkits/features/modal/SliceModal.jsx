import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    isOpen: false,
}


export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
        },
        closeModal: (state, action) => {
            state.isOpen = false;
        },
    }
})


export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;