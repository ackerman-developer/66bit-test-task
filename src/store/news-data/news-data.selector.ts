import { NewsData } from "../../types/news-data";
import { RootState } from "../../types/store";

export const getNews = (state: Pick<RootState, 'news'>): NewsData[] => state.news.news


