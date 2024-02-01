import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import store from './store/index.ts'
import { Provider } from 'react-redux'
import { fetchDarkTheme } from './store/theme-data/api-action.ts'
import { ThemeProvider } from './providers/ThemeProvider.tsx'

store.dispatch(fetchDarkTheme())

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
