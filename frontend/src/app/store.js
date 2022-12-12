import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import monitorReducer from "../features/monitors/monitorSlice";
import incidentReducer from "../features/incidents/incidentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    monitor: monitorReducer,
    incident: incidentReducer,
  },
});

export default store;
