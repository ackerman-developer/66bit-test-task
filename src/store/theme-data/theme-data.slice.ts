import { createSlice } from "@reduxjs/toolkit";
import { IThemeData, ThemeState } from "../../types/theme-data";
import { fetchBlueTheme, fetchDarkTheme, fetchLightTheme } from "./api-action";

const initialState: ThemeState = {
  darkTheme: {} as IThemeData,
  lightTheme: {} as IThemeData,
  blueTheme: {} as IThemeData
}

export const themeData = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDarkTheme.fulfilled, (state, action) => {
        state.darkTheme = action.payload;
      })
      .addCase(fetchLightTheme.fulfilled, (state, action) => {
        state.lightTheme = action.payload;
      })
      .addCase(fetchBlueTheme.fulfilled, (state, action) => {
        state.blueTheme = action.payload;
      })
  }

})
