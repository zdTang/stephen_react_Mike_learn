import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
// see this URL: https://redux-toolkit.js.org/api/configureStore
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
