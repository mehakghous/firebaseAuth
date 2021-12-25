import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import RootReducer from './slices/index'
const store = configureStore({
    reducer: RootReducer,
    middleware: getDefaultMiddleware(
        { serializablcheck: false }
    )
})
export default store