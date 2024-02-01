import { createSlice } from "@reduxjs/toolkit";
import { NewsState } from "../../types/news-data";
import { fetchNews } from "./api-action";

const initialState: NewsState = {
  news: [],
  isNewsDataLoading: false
}

export const newsData = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isNewsDataLoading = true
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload
        state.isNewsDataLoading = false
      })
  }
})
