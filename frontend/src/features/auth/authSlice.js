import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
