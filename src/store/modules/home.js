import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetGoodPriceInfo, GetHomeHightScore, GetHomeDiscount, GetHotRecommenddest } from "@/services/modules/home";

export const fetchHomeDataAction = createAsyncThunk(
  "home/goodPriceInfo",
  (payload, { dispatch }) => {
    GetGoodPriceInfo().then((res) => {
      dispatch(updateGoodPriceInfo(res))
    });
    GetHomeHightScore().then((res) => {
      dispatch(updateHightScoreInfo(res))
    });
    GetHomeDiscount().then((res) => {
      dispatch(updateDiscountInfo(res))
    });
    GetHotRecommenddest().then((res) => {
      dispatch(updateHotRecommendInfo(res))
    });
  }
);


export const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    hightScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {}
  },
  reducers: {
    updateGoodPriceInfo: (state, action) => {
      state.goodPriceInfo = action.payload;
    },
    updateHightScoreInfo: (state, action) => {
      state.hightScoreInfo = action.payload;
    },
    updateDiscountInfo: (state, action) => {
      state.discountInfo = action.payload;
    },
    updateHotRecommendInfo: (state, action) => {
      state.hotRecommendInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
    //   console.log(payload)
    //   state.goodPriceInfo = payload.response;
    // });
  },
});

export const { updateGoodPriceInfo, updateHightScoreInfo, updateDiscountInfo, updateHotRecommendInfo } = homeSlice.actions;

export default homeSlice.reducer;
