import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { reset } from "./action";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store };
export { reset, addMovie, addSong, removeMovie, removeSong };

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
