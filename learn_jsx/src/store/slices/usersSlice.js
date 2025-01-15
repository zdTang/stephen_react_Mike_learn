import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../store/thunks/fetchUsers";
//Detailed slice information, see this URL: https://redux-toolkit.js.org/api/createSlice
const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  //This slice will only use ExtraReducers to handle async actions
  //reducers: {},
  extraReducers: (builder) => {
    builder
      /* 
      Redux Toolkit don't want us to type action type manually!
      .addCase("users/fetchUsers/pending", (state) => {
        state.isLoading = true;
      }) */
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const usersReducer = usersSlice.reducer;
