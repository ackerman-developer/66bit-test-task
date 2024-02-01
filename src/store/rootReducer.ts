import { combineReducers } from "@reduxjs/toolkit";
import { newsData } from "./news-data/news-data.slice";
import { themeData } from "./theme-data/theme-data.slice";

export const rootReducer = combineReducers({
  'news': newsData.reducer,
  'theme': themeData.reducer
})
