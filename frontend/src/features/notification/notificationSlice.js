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

export const respondToNotification = createAsyncThunk(
  "notifications/respond",
  async (payload, thunkAPI) => {
    try {
      return await notificationSerivce.respondToNotification(payload);
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
      .addCase(getAllNotifications.fulfilled, (state , action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notifications = action.payload;
      })
      .addCase(getAllNotifications.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(respondToNotification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(respondToNotification.fulfilled, (state , action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.message = action.payload;
      })
      .addCase(respondToNotification.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
  },
});

export const { reset } = notificationSlice.actions;
export default notificationSlice.reducer;
