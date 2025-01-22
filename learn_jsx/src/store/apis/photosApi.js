import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (builder) => ({
    fetchPhotos: builder.query({
      query: (album) => {
        return {
          url: "/photos",
          params: {
            albumId: album.id,
          },
          method: "GET",
        };
      },
    }),
    addPhotos: builder.mutation({
      query: (album) => {
        return {
          url: "/photos",
          params: {
            albumId: album.id,
            url: faker.image.abstract(150, 150, true),
          },
          method: "POST",
        };
      },
    }),
    removePhotos: builder.mutation({
      query: (photo) => {
        return {
          url: `/photos/${photo.id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});
export const {
  useFetchPhotosQuery,
  useAddPhotosMutation,
  useRemovePhotosMutation,
} = photosApi;
export { photosApi };
