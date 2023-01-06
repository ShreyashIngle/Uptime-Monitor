import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import invitationService from './invitationService';


const initialState = {
    invitations: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: ""
}

export const respondToInvitation = createAsyncThunk(
    "notifications/respond",
    async (payload, thunkAPI) => {
        try {
            return await invitationService.respondToNotification(payload);
        } catch (error) {
            const message =
                error.response?.data?.message || error.message || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

const invitationsSlice = createSlice({
    name: 'invitation',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(respondToInvitation.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(respondToInvitation.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                // state.message = action.payload;
            })
            .addCase(respondToInvitation.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })

    }
})

export const { reset } = invitationsSlice.actions;
export default invitationsSlice.reducer;