import { configureStore } from '@reduxjs/toolkit';
import userReducer from './auth/slice.ts';
import {api} from "./operations.ts";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store