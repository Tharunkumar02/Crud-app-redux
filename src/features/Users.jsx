import { createSlice } from '@reduxjs/toolkit'
import { FakeData } from '../features/FakeData'


const initialState = {
    users: FakeData
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, action) => {
            state.users.push(action.payload)
        },

        updateUsers: (state, action) => {
            state.users.map((user) => {
                if (user.id === action.payload.id) {
                    user.username = action.payload.username
                }
            })
        },

        deleteUsers: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload.id)
        }
    }
})

export const { addUsers, updateUsers, deleteUsers } = usersSlice.actions
export default usersSlice.reducer