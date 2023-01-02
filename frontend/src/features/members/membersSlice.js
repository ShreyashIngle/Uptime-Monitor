import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import memberService from "./membersService";

const initialState = {
  members: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const inviteMember = createAsyncThunk(
  "member/invite",
  async (memberDetails, thunkAPI) => {
    try {
      return await memberService.inviteMember(memberDetails);
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

export const getAllMembers = createAsyncThunk(
  "member/getAll",
  async (teamId, thunkAPI) => {
    try {
      return await memberService.getAllMembers(teamId);
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

export const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(inviteMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(inviteMember.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(inviteMember.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(getAllMembers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllMembers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.members = action.payload[0].members;
      })
      .addCase(getAllMembers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = membersSlice.actions;
export default membersSlice.reducer;
