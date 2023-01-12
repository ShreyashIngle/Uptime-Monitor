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
    "invitation/respond",
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

export const getAllInvitations = createAsyncThunk(
    "invitation/get",
    async (userId, thunkAPI) => {
        try {
            return await invitationService.getAllInvitations(userId);
        } catch (error) {
            const message =
                error.response?.data?.message || error.message || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
)


const invitationsSlice = createSlice({
    name: 'invitation',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(respondToInvitation.fulfilled, (state, action) => {
                state.isSuccess = true;
            })
            .addCase(respondToInvitation.rejected, (state) => {
                state.isError = true;
            })
            
            .addCase(getAllInvitations.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllInvitations.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                console.log('action.payload',action.payload);
                state.invitations = action.payload;
            })
            .addCase(getAllInvitations.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })

    }
})

export const { reset } = invitationsSlice.actions;
export default invitationsSlice.reducer;