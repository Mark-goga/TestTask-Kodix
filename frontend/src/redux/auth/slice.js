import {createSlice} from "@reduxjs/toolkit";
import {logout, refreshAllToken, refreshUser, signup, singin} from "./operation";

const initialState = {
	accessToken: null,
	refreshToken: null,
	status: "idle",
	error: null,
	isLoggedIn: false,
	isRefreshing: false,
};

function fetchPending(state) {
	state.status = "loading";
	state.error = null;
}

function fetchError(state, action) {
	state.status = "failed";
	state.error = action.payload?.message || "Error";
}

const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	extraReducers: (builder) => {
		builder
				.addCase(singin.pending, (state) => {
					fetchPending(state);
					state.isLoggedIn = false;
				})
				.addCase(singin.fulfilled, (state, action) => {
					state.status = "succeeded";
					state.accessToken = action.payload.data.accessToken;
					state.refreshToken = action.payload.data.refreshToken;
					state.error = null;
					state.isLoggedIn = true;
				})
				.addCase(singin.rejected, (state, action) => {
					fetchError(state, action);
					state.isLoggedIn = false;
				}).addCase(signup.pending, (state) => {
          fetchPending(state);
          state.isLoggedIn = false;
        })
				.addCase(signup.fulfilled, (state, action) => {
					state.status = "succeeded";
					state.accessToken = action.payload.data.accessToken;
					state.refreshToken = action.payload.data.refreshToken;
					state.error = null;
					state.isLoggedIn = true;
				})
				.addCase(signup.rejected, (state, action) => {
					fetchError(state, action);
					state.isLoggedIn = false;
				})
				.addCase(logout.pending, (state) => {
					state.accessToken = null;
					state.refreshToken = null;
					state.status = "succeeded";
					state.error = null;
					state.isLoggedIn = false;
				})
				.addCase(refreshAllToken.pending, (state) => {
					fetchPending(state);
				})
				.addCase(refreshAllToken.fulfilled, (state, action) => {
					state.status = "succeeded";
					state.accessToken = action.payload.data.accessToken;
					state.refreshToken = action.payload.data.refreshToken;
					state.isLoggedIn = true;
					state.error = null;
				})
				.addCase(refreshAllToken.rejected, (state, action) => {
					fetchError(state, action);
				})
				.addCase(refreshUser.pending, (state) => {
					state.isRefreshing = true;
				})
				.addCase(refreshUser.fulfilled, (state, action) => {
					state.status = "succeeded";
					state.accessToken = action.payload.data.accessToken;
					state.refreshToken = action.payload.data.refreshToken;
					state.isLoggedIn = true;
					state.error = null;
					state.isRefreshing = false;
				}).addCase(refreshUser.rejected, (state, action) => {
			fetchError(state, action);
			state.isRefreshing = false;
		});
	},
});

export default authSlice.reducer;
