import { api } from "../operations.ts";
import {User} from "./user.type.ts";

export const authApiSlice = api.injectEndpoints({
    endpoints: builder => ({
        getUser: builder.mutation<User[], string>({
            query: (username: string) => ({
                url: `/users?username=${username}`,
            }),
        })
    })
});

export const {
    useGetUserMutation
} = authApiSlice;
