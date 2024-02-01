import { useState, ReactNode, useEffect, FC } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IThemeData } from "../types/theme-data";

interface IProps{
  children: ReactNode
}

export const ThemeProvider: FC<IProps> = ({children}) => {
  const storedTheme = JSON.parse(localStorage.getItem("selectedTheme") || "null")
  const [theme, setTheme] = useState<IThemeData>(storedTheme)

  useEffect(() => {
    localStorage.setItem("selectedTheme", JSON.stringify(theme));
  }, [theme])

  function changeTheme(newTheme:IThemeData){
    setTheme(newTheme)
  }

  return(
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

