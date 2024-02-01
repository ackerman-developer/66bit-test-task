import { RootState } from "../../types/store";
import { IThemeData } from "../../types/theme-data";

export const getDarkTheme = (state: Pick<RootState, 'theme'>): IThemeData => state.theme.darkTheme
export const getLightTheme = (state: Pick<RootState, 'theme'>): IThemeData => state.theme.lightTheme
export const getBlueTheme = (state: Pick<RootState, 'theme'>): IThemeData => state.theme.blueTheme


