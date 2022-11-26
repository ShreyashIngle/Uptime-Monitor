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

//Get monitors
export const getMonitors = createAsyncThunk(
  "monitors/getAll",
  async (_, thunkAPI) => {
    try {
      return await monitorService.getMonitors();
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
  reducers: {
    reset: (state) => initialState,
  },
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
      })

      .addCase(getMonitors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMonitors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.monitors = action.payload;
      })
      .addCase(getMonitors.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = monitorSlice.actions;
export default monitorSlice.reducer;
