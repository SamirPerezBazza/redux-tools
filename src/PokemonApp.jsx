import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {
  const { isLoading, pokemons, page } = useSelector(state => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      {isLoading && <span>Loading...</span>}
      <ul>
        {
          pokemons.map(pokemon => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))
        }
      </ul>
      <button
        disable={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  )
}
