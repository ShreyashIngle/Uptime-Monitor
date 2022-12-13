import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import incidentService from "./incidentsService";
import incidentsService from "./incidentsService";

const initialState = {
  incidents: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//Get Incidents
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

//Resolve Incident
export const resolveIncident = createAsyncThunk(
  "incident/resolve",
  async (incidentId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await incidentService.resolveIncident(incidentId, token);
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
      })

      //resolve an incident
      .addCase(resolveIncident.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resolveIncident.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(resolveIncident.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

export const { reset } = incidentSlice.actions;
export default incidentSlice.reducer;
