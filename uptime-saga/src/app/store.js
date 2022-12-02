import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import monitorReducer from "../features/monitors/monitorSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    monitor: monitorReducer,
  },
});

export default store;
