import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const entireSlice = createSlice({
    name: 'entire',
    initialState,
    reducers: {
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { incrementByAmount } = entireSlice.actions

export default entireSlice.reducer