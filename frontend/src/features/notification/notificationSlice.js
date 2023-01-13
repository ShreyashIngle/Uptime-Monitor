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

export const markAllAsRead = createAsyncThunk(
  "notifications/markAsRead",
  async (notificationIds, thunkAPI) => {
    try {
      return await notificationSerivce.markAllAsRead({ notificationIds });
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteAll = createAsyncThunk(
  "notifications/delete",
  async (notificationIds, thunkAPI) => {
    try {
      console.log('deleteAll called')
      return await notificationSerivce.deleteAll({ notificationIds });
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
      .addCase(getAllNotifications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notifications = action.payload;
      })
      .addCase(getAllNotifications.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      
      .addCase(deleteAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notifications = [];
      })
  },
});

export const { reset } = notificationSlice.actions;
export default notificationSlice.reducer;
