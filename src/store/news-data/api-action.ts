import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { NewsData } from "../../types/news-data";
import { AppDispatch, RootState } from "../../types/store";
import { APIRoute } from "../../const";

export const fetchNews = createAsyncThunk<NewsData[], undefined, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchNews',
  async (__arg, {extra: api}) => {
    const {data} = await api.get<NewsData[]>(APIRoute.news)
    return data
  },
)
