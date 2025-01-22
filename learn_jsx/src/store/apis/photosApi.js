import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  //// The 'album' is the parameter passed to useAddAlbumMutation hook
  endpoints: (builder) => ({
    fetchPhotos: builder.query({
      providesTags: (result, error, album) => {
        const tags = result.map((photo) => {
          return { type: "Photo", id: photo.id };
        });
        tags.push({ type: "AlbumPhoto", id: album.id });
        return tags;
      },
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
      invalidatesTags: (result, error, album) => {
        return [{ type: "AlbumPhoto", id: album.id }];
      },
      query: (album) => {
        return {
          url: "/photos",
          body: {
            albumId: album.id,
            //url: faker.image.abstract(150, 150, true),
            url: faker.image.urlPicsumPhotos({ width: 150, height: 150 }),
          },
          method: "POST",
        };
      },
    }),
    removePhotos: builder.mutation({
      invalidatesTags: (result, error, photo) => {
        return [{ type: "Photo", id: photo.id }];
      },
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
