import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const photoApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (builder) => ({
    fetchPhotos: builder.query({
      query: () => "/photos",
    }),
    addPhotos: builder.query({
      query: () => "/photos",
    }),
    removePhotos: builder.query({
      query: () => "/photos",
    }),
  }),
});
