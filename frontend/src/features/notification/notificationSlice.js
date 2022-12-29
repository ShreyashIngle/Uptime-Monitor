import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import notificationSerivce from "./notificationService";

const initialState = {
  notifications: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getAllNotifications = createAsyncThunk(
  "notifications/create",
  async (userId, thunkAPI) => {
    try {
      return await notificationSerivce.getAllNotifications(userId);
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(getAllNotifications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllNotifications.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getAllNotifications.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = notificationSlice.actions;
export default notificationSlice.reducer;
