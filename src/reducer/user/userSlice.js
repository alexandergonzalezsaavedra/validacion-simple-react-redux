import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    correo: "",
    fullname: "",
}
export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.correo = action.payload.correo
            state.fullname = action.payload.fullname
        },
        unSetUser: (state) => {
            state.correo = ""
            state.fullname = ""
        }
    },
})
export const { setUser, unSetUser } = userSlice.actions
export default userSlice.reducer