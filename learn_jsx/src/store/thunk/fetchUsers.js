import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// This function creates an asynchronous thunk action creator
// It takes a name parameter and returns an async function
// The async function fetches data from a URL and returns the response data

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3001/users");

  return response.data;
});

/*
Once create a thunk, it will automatically generate three properties:
fetchUsers.pending === "users/fetch/pending"
fetchUsers.fulfilled === "users/fetch/fulfilled"
fetchUsers.rejected === "users/fetch/rejected"
*/
export { fetchUsers };
