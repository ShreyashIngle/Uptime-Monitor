import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  monitors: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const monitorSlice = createSlice({
  name: "monitor",
  initialState,
  reducers: {},
});

export const {} = monitorSlice.actions;
export default monitorSlice.reducer;
