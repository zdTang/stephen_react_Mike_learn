import { configureStore, createSlice } from "@reduxjs/toolkit";
const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      state.pop(action.payload);
    },
  },
});
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

console.log(store);
