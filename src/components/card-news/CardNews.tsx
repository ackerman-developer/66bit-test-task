import { useTheme } from "../../hooks/useTheme"
import { NewsData } from "../../types/news-data"
import styles from './CardNews.module.scss'

interface ICardNewsProps {
  news: NewsData
}

export default function CardNews({news}: ICardNewsProps){
  const { theme } = useTheme()

  return(
    <div className={styles.card} style={{ backgroundColor: theme.secondColor, color: theme.textColor }}>
      <h2>{news.title}</h2>
      <p>{news.content}</p>
      <p>Создана: {news.createdAt}</p>
      <p>Отредактирована: {news.updatedAt}</p>
    </div>
  )
}

