import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import monitorReducer from "../features/monitors/monitorSlice";
import incidentReducer from "../features/incidents/incidentSlice";
import memberReducer from "../features/members/membersSlice";
import notificationReducer from "../features/notification/notificationSlice";
import invitationReducer from "../features/invitations/invitationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    monitor: monitorReducer,
    incident: incidentReducer,
    member: memberReducer,
    notification: notificationReducer,
    invitation: invitationReducer,
  },
});

export default store;
