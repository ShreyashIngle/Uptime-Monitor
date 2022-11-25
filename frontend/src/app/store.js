import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import monitorReducer from "../features/monitorsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    monitor: monitorReducer,
  },
});

export default store;
