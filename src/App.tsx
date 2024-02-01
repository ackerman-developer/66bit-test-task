import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "./const";
import NewsPage from "./pages/news-page/NewsPage";
import ChangeTheme from "./pages/change-theme/ChangeTheme";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ={AppRoute.news} element = {<Layout/>}>
          <Route
            path = {AppRoute.news}
            element = {<NewsPage/>}
          />
          <Route
            path = {AppRoute.themes}
            element = {<ChangeTheme/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
