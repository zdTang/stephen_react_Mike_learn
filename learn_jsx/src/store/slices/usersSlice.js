import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";
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

    builder
      .addCase(addUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload); //In-memory store ??
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });

    builder
      .addCase(removeUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        // Here need to aware the Id of the delted user, while our removeUser Thunk might not pass this id to Response !
        // Be aware, the data here is the in-memory Sync of the user table in the JSON server
        state.data = state.data.filter((user) => user.id !== action.payload.id);
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const usersReducer = usersSlice.reducer;
