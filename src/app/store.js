import { configureStore } from '@reduxjs/toolkit'

// Reducers
import userReducer from '../reducer/user/userSlice'
import cartReducer from '../reducer/cart/cartSlice'
import tokenReducer from '../reducer/log/logSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        tokenAccess: tokenReducer
    },
})