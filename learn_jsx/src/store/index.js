import { configureStore, createSlice } from "@reduxjs/toolkit";

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
    // Will be executed automatically!
    //builder.addCase("movie/resetMovie", (state, action) => []);
    builder.addCase(
      //moviesSlice.actions.resetMovie.toString(),
      moviesSlice.actions.resetMovie,
      (state, action) => []
    );
  },
});

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
    resetMovie(state, action) {
      //React also implay the immar library for user, so that we can change the state directly
      //state=[] will not work, this is re-assigning thte state, not changing the state
      return [];
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export { store };
export const { addSong, removeSong } = songsSlice.actions; // these are action creater
export const { addMovie, removeMovie, resetMovie } = moviesSlice.actions; // these are action creater

const startingState = store.getState();
// console.log(store);
// console.log(startingState);
console.log(JSON.stringify(startingState));

// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song!!!",
// });

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
