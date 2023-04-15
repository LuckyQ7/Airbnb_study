import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetEntireListAPI } from "../../services/modules/entire";

export const fetchEntireDataAction = createAsyncThunk(
  "entire/entireInfo",
  (payload, { dispatch, getState }) => {
    dispatch(updateIsLoading(true));
    GetEntireListAPI(payload).then((res) => {
      dispatch(updateEntireList(res));
      dispatch(updateIsLoading(false));
    });
  }
);

export const entireSlice = createSlice({
  name: "entire",
  initialState: {
    entireInfo: {},
    isLoading: false,
  },
  reducers: {
    updateEntireList: (state, action) => {
      state.entireInfo = action.payload;
    },
    updateIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { updateEntireList, updateIsLoading } = entireSlice.actions;

export default entireSlice.reducer;
