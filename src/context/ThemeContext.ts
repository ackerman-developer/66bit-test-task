import { Dispatch, createContext } from "react";
import { IThemeData } from "../types/theme-data";

interface IContext {
  theme: IThemeData
  changeTheme: (theme: IThemeData) => void
  setTheme: Dispatch<React.SetStateAction<IThemeData>>
}

export const ThemeContext = createContext<IContext>({
  theme: {} as IThemeData,
  changeTheme: () => {},
  setTheme: (() => {}) as Dispatch<React.SetStateAction<IThemeData>>,
})
