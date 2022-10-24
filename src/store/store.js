import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis/todos/todosApi'
import { counterSlice, pokemonSlice } from './slices'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
    //This is where the queries are going to be stored
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(todosApi.middleware)
})