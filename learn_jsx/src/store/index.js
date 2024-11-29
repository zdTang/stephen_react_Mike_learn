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

export { store };

// const startingState = store.getState();
// console.log(store);
// console.log(startingState);
// console.log(JSON.stringify(startingState));

// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song!!!",
// });

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
