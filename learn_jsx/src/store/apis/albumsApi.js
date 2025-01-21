import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { faker } from "@faker-js/faker";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints(builder) {
    return {
      addAlbum: builder.mutation({
        invalidatesTags: ["Album"],
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
        /* invalidatesTags: (result, error, user) => [
          { type: "User", id: user.id },
        ], */
      }),
      fetchAlbums: builder.query({
        /* providesTags: (result, error, user) => {
          const res = [];
          result.forEach((album) => {
            res.push({ type: "Album", id: album.id });
          });
          res.push({ type: "User", id: user.id });
          return res;
        }, */
        providesTags: ["Album"],
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});
//albumsApi.useFetchAlbumsQuery();
export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
export { albumsApi };
