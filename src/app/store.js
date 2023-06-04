import {configureStore} from '@reduxjs/toolkit'
import users from '../features/Users'


export const store = configureStore({
    reducer: {
        users,
    }
})