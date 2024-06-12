import { createSlice } from '@reduxjs/toolkit';
import { fetchProfile } from '../services/fetchProfile/fetchProfile';
var initialState = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};
export var profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder.addCase(fetchProfile.pending, function (state, action) {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchProfile.fulfilled, function (state, action) {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchProfile.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
// Action creators are generated for each case reducer function
export var profileActions = profileSlice.actions;
export var profileReducer = profileSlice.reducer;
