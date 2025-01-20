import { createApi } from "@reduxjs.toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: () => {
          return "/albums";
        },
      }),
    };
  },
});
