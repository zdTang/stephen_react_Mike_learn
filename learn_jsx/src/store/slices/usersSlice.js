import { createSlice } from "@reduxjs/toolkit";
//Detailed slice information, see this URL: https://redux-toolkit.js.org/api/createSlice
const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  reducers: {},
});

export const usersReducer = usersSlice.reducer;
