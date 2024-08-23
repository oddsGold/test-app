import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from './user.type.ts';

const initialState: UserState = {
    users: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
        clearUser: (state) => {
            state.users = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
