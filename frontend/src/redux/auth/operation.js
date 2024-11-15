import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000';

function setAuthHeader(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const singin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post("/auth/signin", { email, password });
      setAuthHeader(response.data.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
export const signup = createAsyncThunk(
    "auth/register",
    async ({ email, password, firstName, lastName }, thunkAPI) => {
      try {
        const response = await axios.post("/auth/signup", { email, password, firstName, lastName });
        setAuthHeader(response.data.data.accessToken);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data);
      }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  setAuthHeader("");
  return {};
});

export const refreshAllToken = createAsyncThunk(
  "auth/refresh-token",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const refreshToken = state.auth.refreshToken;
      const response = await axios.post("/auth/refresh", { refreshToken });
      setAuthHeader(response.data.data.accessToken);
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(logout());
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
);

export const refreshUser = createAsyncThunk(
  "auth/refresh-user",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const refreshToken = state.auth.refreshToken;
      const response = await axios.post("/auth/refresh", { refreshToken });
      setAuthHeader(response.data.data.accessToken);
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(logout());
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.refreshToken !== null;
    }
  }
);
      
