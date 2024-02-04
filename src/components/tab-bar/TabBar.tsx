import { Link } from "react-router-dom";
import styles from './TabBar.module.scss'
import { useTheme } from "../../hooks/useTheme";
import ThemeIcon from "../../assets/img/theme-icon.svg?react"
import NewsIcon from '../../assets/img/news-icon.svg?react'

export default function TabBar() {
  const { theme } = useTheme()

  return (
    <div className={styles.bar} style={{ backgroundColor: theme.secondColor }}>
      <Link to='/'>
        <NewsIcon />
      </Link>
      <Link to='/themes'>
        <ThemeIcon />
      </Link>
    </div>
  )
}
