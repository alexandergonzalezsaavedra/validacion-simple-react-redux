import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    tokenUser: ""
}
export const tokenSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setTokenUser: (state, action) => {
            state.tokenUser = action.payload.token
        }
    },
})
export const { setTokenUser } = tokenSlice.actions
export default tokenSlice.reducer