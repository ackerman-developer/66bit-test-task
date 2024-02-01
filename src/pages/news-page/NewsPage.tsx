import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchNews } from "../../store/news-data/api-action";
import CardNews from "../../components/card-news/CardNews";

export default function NewsPage(){
  const dispatch = useAppDispatch()
  const news = useAppSelector((state) => state.news.news)

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return(
    <>
      {news.map((newsDescription) =>
        <CardNews key={newsDescription.id} news={newsDescription}/>
      )}
    </>
  )
}

