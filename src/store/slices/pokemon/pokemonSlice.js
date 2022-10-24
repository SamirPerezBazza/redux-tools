import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      const { page, pokemons } = action.payload;
      state.isLoading = false;
      state.page = page;
      state.pokemons = pokemons;
    }
  },
})


export const { setPokemons, startLoadingPokemons } = pokemonSlice.actions