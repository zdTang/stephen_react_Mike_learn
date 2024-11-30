import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    // // Will be executed automatically!
    // //builder.addCase("movie/resetMovie", (state, action) => []);
    // builder.addCase(
    //   //moviesSlice.actions.resetMovie.toString(),
    //   moviesSlice.actions.resetMovie,
    //   (state, action) => []
    // );
    builder.addCase(reset, (state, action) => []);
  },
});

export const { addSong, removeSong } = songsSlice.actions; // these are action creater
export const songsReducer = songsSlice.reducer;
