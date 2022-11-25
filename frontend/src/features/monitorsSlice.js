import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const monitorSlice = createSlice({
  name: "monitor",
  initialState,
  reducers: {
    setMonitors: (state, action) => {
      state = action.payload;
    },
  },
});

export const setMonitors = monitorSlice.actions;
export default monitorSlice.reducer;
