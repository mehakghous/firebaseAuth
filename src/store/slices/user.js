import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
}


const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

    }
})

const { actions, reducer } = user;
export const { setUser } = actions;
export default reducer