import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetGoodPriceInfo } from "@/services/modules/home";

export const fetchGoodPriceInfo = createAsyncThunk(
  "home/goodPriceInfo",
  async () => {
    const response = await GetGoodPriceInfo();
    return response;
  }
);

const initialState = {
  goodPriceInfo: {},
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateGoodPriceInfo: (state, action) => {
      state.goodPriceInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoodPriceInfo.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload;
    });
  },
});

export const { updateGoodPriceInfo } = homeSlice.actions;

export default homeSlice.reducer;
