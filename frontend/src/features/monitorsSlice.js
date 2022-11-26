import { createSlice } from "@reduxjs/toolkit";

const monitorSlice = createSlice({
  name: "monitor",
  initialState: [],
  reducers: {
    setMonitors: (state, action) => {
      console.log("action", action);
      const data = action.payload;
      for (let dataItem of data) {
        state.push(dataItem);
      }
    },
  },
});

export const { setMonitors } = monitorSlice.actions;
export default monitorSlice.reducer;
