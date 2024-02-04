import { IThemeData } from '../../types/theme-data';
import styles from './ButtonTheme.module.scss'

interface IButtonThemeProps {
  theme: IThemeData
  changeTheme: (newTheme: IThemeData) => void
}

export default function ButtonTheme({ theme, changeTheme }: IButtonThemeProps){
  return(
    <div className={styles.button}>
      <button
        key={theme.title}
        onClick={() => changeTheme(theme)}
        style={{
          borderColor: theme.secondColor,
          background: theme.mainColor,
          color: theme.textColor,
        }}
      >
        {theme.title}
      </button>
    </div>
  )
}
