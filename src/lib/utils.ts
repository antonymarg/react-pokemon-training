import type { Pokemon } from './types'

const getPokemonUID = (pokemon: Pokemon) => {
  return `${pokemon.pokedexId}-${Date.now()}`
}

export { getPokemonUID }
