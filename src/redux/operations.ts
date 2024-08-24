import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json");
        headers.set("Access-Control-Allow-Origin", "*");
        return headers;
    }
})

export const api = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({}),
});
