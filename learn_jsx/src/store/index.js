import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";
// see this URL: https://redux-toolkit.js.org/api/configureStore
const store = configureStore({
  reducer: {
    users: usersReducer,
    //albums: albumsApi.reducer  // This works too!
    [albumsApi.reducerPath]: albumsApi.reducer, // this key must equal to reducerPath
    [photosApi.reducerPath]: photosApi.reducer, // this key must equal to reducerPath
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

const currentState = store.getState();
console.log("From store to monitor Current state:", currentState); // Print the full Redux state

setupListeners(store.dispatch);
// Even through the following thunks are not imported here, we still can export from here.
export default store;
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumsApi";

export {
  useFetchPhotosQuery,
  useAddPhotosMutation,
  useRemovePhotosMutation,
} from "./apis/photosApi";
