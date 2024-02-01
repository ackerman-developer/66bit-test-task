import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch, RootState } from "../../types/store";
import { APIRoute } from "../../const";
import { IThemeData } from "../../types/theme-data";

export const fetchDarkTheme = createAsyncThunk<IThemeData, undefined, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchDarkTheme',
  async (__arg, {extra: api}) => {
    const {data} = await api.get<IThemeData>(APIRoute.darkTheme)
    return data
  },
)

export const fetchLightTheme = createAsyncThunk<IThemeData, undefined, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchLightTheme',
  async (__arg, {extra: api}) => {
    const {data} = await api.get<IThemeData>(APIRoute.lightTheme)
    return data
  },
)

export const fetchBlueTheme = createAsyncThunk<IThemeData, undefined, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchBlueTheme',
  async (__arg, {extra: api}) => {
    const {data} = await api.get<IThemeData>(APIRoute.blueTheme)
    return data
  },
)
