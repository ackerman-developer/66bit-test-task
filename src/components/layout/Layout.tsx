import { Outlet, useLocation } from "react-router";
import { AppRoute } from "../../const";
import TabBar from "../tab-bar/TabBar";
import Header from "../header/Header";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchBlueTheme, fetchLightTheme } from "../../store/theme-data/api-action";
import { getLightTheme } from "../../store/theme-data/theme-data.selectors";
import { IThemeData } from "../../types/theme-data";
import { useTheme } from "../../hooks/useTheme";
import styles from './Layout.module.scss'

export default function Layout(){
  const { theme, setTheme } = useTheme()
  const dispatch = useAppDispatch()
  const location = useLocation()

  const getPageTitle = () => {
    switch (location.pathname) {
      case AppRoute.news:
        return "Новости"
      case AppRoute.themes:
        return "Темы"
    }
  }

  useEffect(() => {
    dispatch(fetchLightTheme())
    dispatch(fetchBlueTheme())
  }, [dispatch])

  const lightTheme: IThemeData = useAppSelector(getLightTheme)

  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem("selectedTheme") || "null")
    setTheme(storedTheme || lightTheme)
  }, [lightTheme, setTheme])

  const layoutStyles = {
    backgroundColor: theme.mainColor,
    color: theme.textColor
  }

  return(
    <div style={layoutStyles}>
      <Header pageTitle={getPageTitle()}/>
      <div className={styles.content}>
        <Outlet />
      </div>
      <TabBar />
    </div>
  )
}
