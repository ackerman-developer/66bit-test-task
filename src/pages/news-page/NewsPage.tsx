import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchNews } from "../../store/news-data/api-action";
import { getNews } from "../../store/news-data/news-data.selector";
import CardNews from "../../components/card-news/CardNews";
import PullToRefresh from 'react-simple-pull-to-refresh';
import { ClipLoader } from "react-spinners";
import { useTheme } from "../../hooks/useTheme";
import styles from './NewsPage.module.scss'


export default function NewsPage() {
  const dispatch = useAppDispatch()
  const news = useAppSelector(getNews)
  const { theme } = useTheme()

  const handleRefresh = () => {
    return dispatch(fetchNews())
  }

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <PullToRefresh
      onRefresh={handleRefresh}
      pullingContent=""
      refreshingContent={
        <ClipLoader
          size={35}
          color={theme.textColor}
          loading={true}
          className={styles.loader}
        />
      }
    >
      <>
        {news.map((newsDescription) => (
          <CardNews key={newsDescription.id} news={newsDescription} />
        ))}
        <button onClick={handleRefresh}>Обновить</button>
      </>
    </PullToRefresh>
  )
}
