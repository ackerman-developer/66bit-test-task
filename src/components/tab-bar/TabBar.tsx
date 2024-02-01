import { Link } from "react-router-dom";
import styles from './TabBar.module.scss'
import { useTheme } from "../../hooks/useTheme";
import theme_icon from '../../assets/img/theme-icon.svg'
import news_icon from '../../assets/img/news-icon.svg'

export default function TabBar(){
  const { theme } = useTheme()

  return(
    <div className={styles.bar} style={{ backgroundColor: theme.secondColor}}>
      <Link to='/'><img src={news_icon}/></Link>
      <Link to='/themes'><img src={theme_icon}/></Link>
    </div>
  )
}
