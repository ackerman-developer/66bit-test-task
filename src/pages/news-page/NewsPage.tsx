import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchNews } from "../../store/news-data/api-action";
import { getNews } from "../../store/news-data/news-data.selector";
import { ClipLoader } from "react-spinners";
import { useTheme } from "../../hooks/useTheme";
import CardNews from "../../components/card-news/CardNews";
import PullToRefresh from 'react-simple-pull-to-refresh';
import styles from './NewsPage.module.scss'
import ButtonScrollUp from "../../components/button-scrollup/ButtonScrollUp";


export default function NewsPage() {
  const dispatch = useAppDispatch()
  const news = useAppSelector(getNews)
  const { theme } = useTheme()
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false)

  const handleRefresh = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    return dispatch(fetchNews())
  }

  useEffect(() => {
    dispatch(fetchNews())
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [dispatch])

  return (
    <PullToRefresh
      className={styles.container}
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
        <button onClick={handleRefresh} style={{color: theme.textColor, background: theme.secondColor}}>Обновить новости</button>
        {showScrollButton && <ButtonScrollUp />}
      </>
    </PullToRefresh>
  )
}
