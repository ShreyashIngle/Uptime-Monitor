import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import monitorService from "./monitorService";

const initialState = {
  monitors: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//Create new monitor
export const createMonitor = createAsyncThunk(
  "monitors/create",
  async (monitorData, thunkAPI) => {
    try {
      return await monitorService.createMonitor(monitorData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const monitorSlice = createSlice({
  name: "monitor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMonitor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMonitor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.monitors.push(action.payload);
      })
      .addCase(createMonitor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

// export const {} = monitorSlice.actions;
export default monitorSlice.reducer;
