import { useAppSelector } from "../../hooks/redux-hooks";
import { useTheme } from "../../hooks/useTheme";
import { getBlueTheme, getDarkTheme, getLightTheme } from "../../store/theme-data/theme-data.selectors";
import { IThemeData } from "../../types/theme-data";
import styles from './ChangeTheme.module.scss'

export default function ChangeTheme() {
  const { setTheme } = useTheme()

  const changeTheme = (newTheme: IThemeData) => {
    setTheme(newTheme)
  }

  const lightTheme: IThemeData = useAppSelector(getLightTheme)
  const darkTheme: IThemeData = useAppSelector(getDarkTheme)
  const blueTheme: IThemeData = useAppSelector(getBlueTheme)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button onClick={() => changeTheme(lightTheme)}>{lightTheme.title}</button>
        <button onClick={() => changeTheme(darkTheme)}>{darkTheme.title}</button>
        <button onClick={() => changeTheme(blueTheme)}>{blueTheme.title}</button>
      </div>
    </div>
  )
}
