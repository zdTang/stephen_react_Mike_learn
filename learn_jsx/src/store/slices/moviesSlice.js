import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";
const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    // resetMovie(state, action) {
    //   //React also implay the immar library for user, so that we can change the state directly
    //   //state=[] will not work, this is re-assigning thte state, not changing the state
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => []);
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions; // these are action creater
export const moviesReducer = moviesSlice.reducer;
