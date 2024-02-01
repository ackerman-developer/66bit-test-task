export type NewsData = {
  id: number
  title: string
  content : string
  createdAt: string
  updatedAt: string
}

export type NewsState = {
  news: NewsData[],
  isNewsDataLoading: boolean
}
