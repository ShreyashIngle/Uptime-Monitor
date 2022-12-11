import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import incidentsService from "./incidentsService";

const initialState = {
  monitors: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//Get Monitors
export const getIncidents = createAsyncThunk(
  "incidents/getAll",
  async(_,thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await incidentsService.getAllIncidents(token);
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
)

export const incidentSlice = createSlice({
  name:"incident",
  initialState,
  reducers:{
    reset:(state) => initialState;
  },
  extraReducers:(builder) => {
    builder.addCase
  }
})

