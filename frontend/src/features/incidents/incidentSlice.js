import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import incidentsService from "./incidentsService";

const initialState = {
  monitors: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};


