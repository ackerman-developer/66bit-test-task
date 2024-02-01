import { Link } from "react-router-dom";
import styles from './TabBar.module.scss'
import { useTheme } from "../../hooks/useTheme";

export default function TabBar(){
  const { theme } = useTheme()

  return(
    <div className={styles.bar} style={{ backgroundColor: theme.secondColor}}>
      <Link to='/'>Новости</Link>
      <Link to='/themes'>Темы</Link>
    </div>
  )
}
