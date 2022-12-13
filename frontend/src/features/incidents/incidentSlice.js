import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import incidentsService from "./incidentsService";

const initialState = {
  incidents: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//Get Monitors
export const getIncidents = createAsyncThunk(
  "incidents/getAll",
  async (_, thunkAPI) => {
    try {
      const { token, userId } = thunkAPI.getState().auth.user;
      return await incidentsService.getAllIncidents(token, userId);
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

export const incidentSlice = createSlice({
  name: "incident",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      //Get all incidents
      .addCase(getIncidents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIncidents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.incidents = action.payload;
      })
      .addCase(getIncidents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = incidentSlice.actions;
export default incidentSlice.reducer;
