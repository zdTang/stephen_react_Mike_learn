import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { faker } from "@faker-js/faker";

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    fetchFn: async (...args) => {
      // Redux toolkit use fetchFn to do stuff, we can override it by creating a same name function
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      addAlbum: builder.mutation({
        //invalidatesTags: ["Album"],
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
        // The 'user' is the parameter passed to useAddAlbumMutation hook
        invalidatesTags: (result, error, user) => [
          { type: "Album", id: user.id },
        ],
      }),
      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          const res = [{ type: "Album", id: user.id }];
          return res;
        },
        //providesTags: ["Album"],
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
