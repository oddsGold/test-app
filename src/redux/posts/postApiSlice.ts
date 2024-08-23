import {api} from "../operations.ts";
import {Post, Comment} from "./post.type.ts";

export const postApiSlice = api.injectEndpoints({
    endpoints: builder => ({
        getPosts: builder.query<Post[], void>({
            query: () => ({
                url: '/posts',
                transformResponse: (response: Post[]) => response,
            }),
        }),
        getCurrentPost: builder.query<Comment[], string>({
            query: (id: string) => `/posts/${id}/comments`,
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetPostsQuery,
    useGetCurrentPostQuery,
} = postApiSlice;