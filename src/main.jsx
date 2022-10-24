import React from 'react'
import ReactDOM from 'react-dom/client'
import {PokemonApp} from './PokemonApp.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import './index.css'
import { TodoApp } from './TodoApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <PokemonApp /> */}
    <TodoApp />
  </Provider>
)
