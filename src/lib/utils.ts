import type { Pokemon } from './types'

const getPokemonUID = (pokemon: Pokemon) => {
  return `${pokemon.pokedexId}-${Date.now()}`
}

const getIdFromFetchUrl = (url: string) => {
  const urlParts = url.split('/')
  return urlParts[urlParts.length - 2]
}

const formatApiString = (name: string) => {
  return name
    .replace('-', ' ')
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase())
}

export { getPokemonUID, getIdFromFetchUrl, formatApiString }
