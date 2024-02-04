import { useAppSelector } from '../../hooks/redux-hooks'
import { useTheme } from '../../hooks/useTheme'
import { getBlueTheme, getDarkTheme, getLightTheme } from '../../store/theme-data/theme-data.selectors'
import { IThemeData } from '../../types/theme-data'
import styles from './ChangeTheme.module.scss'
import ButtonTheme from '../../components/button-theme/ButtonTheme'

export default function ChangeTheme() {
  const { setTheme } = useTheme()

  const changeTheme = (newTheme: IThemeData) => {
    setTheme(newTheme)
  }

  const lightTheme: IThemeData = useAppSelector(getLightTheme)
  const darkTheme: IThemeData = useAppSelector(getDarkTheme)
  const blueTheme: IThemeData = useAppSelector(getBlueTheme)
  const themes = [lightTheme, darkTheme, blueTheme]

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {themes.map((theme) => (
          <ButtonTheme key={theme.title} theme={theme} changeTheme={changeTheme} />
        ))}
      </div>
    </div>
  )
}
