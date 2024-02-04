import { useTheme } from '../../hooks/useTheme'
import styles from './ButtonScrollUp.module.scss'

export default function ButtonScrollUp() {
  const { theme } = useTheme()
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return(
    <div className={styles.button}>
      <button onClick={handleScrollUp} style={{color: theme.textColor, background: theme.mainColor, borderRadius: '20px'}}>Наверх</button>
    </div>
  )
}
