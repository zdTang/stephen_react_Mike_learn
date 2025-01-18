import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
// see this URL: https://redux-toolkit.js.org/api/configureStore
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

const currentState = store.getState();
console.log("From store to monitor Current state:", currentState); // Print the full Redux state
export default store;

// Even through the following thunks are not imported here, we still can export from here.
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
