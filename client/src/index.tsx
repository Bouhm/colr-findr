import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { StoreProvider } from './components/Store'

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
)
