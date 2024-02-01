export interface IThemeData{
  id: number | null
  title: string
  name: string
  mainColor : string
  secondColor: string
  textColor: string
}

export type ThemeState = {
  darkTheme: IThemeData,
  lightTheme: IThemeData,
  blueTheme: IThemeData
}
