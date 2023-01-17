import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: ["User", "Team", "LocationRacks", "Suppliers"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        // getUsers: build.query({
        //     query: () => "management/users",
        //     providesTags: ["Users"],
        // }),
        getUsers: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "management/team",
                method: "GET",
                params: { page, pageSize, sort, search },
            }),
            providesTags: ["Team"],
        }),
        getLocationRacks: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "inventory/locationRacks",
                method: "GET",
                params: { page, pageSize, sort, search },
            }),
            providesTags: ["LocationRacks"],
        }),
        getSuppliers: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "inventory/suppliers",
                method: "GET",
                params: { page, pageSize, sort, search },
            }),
            providesTags: ["Suppliers"],
        }),
    }),
});  

export const { 
    useGetUserQuery, 
    useGetUsersQuery, 
    useGetLocationRacksQuery, 
    useGetSuppliersQuery,
 } = api;