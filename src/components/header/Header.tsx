import { useTheme } from '../../hooks/useTheme';
import styles from './Header.module.scss'

interface HeaderProps {
  pageTitle?: string;
}

export default function Header(props: HeaderProps){
  const { theme } = useTheme()

  return(
    <div className={styles.header} style={{ backgroundColor: theme.secondColor}}>
      <h1>{props.pageTitle}</h1>
    </div>
  )
}
