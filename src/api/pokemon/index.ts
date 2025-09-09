import type { Pokemon, PokemonMoves } from '../../lib/types'
import type { PokemonListItem, PokemonListResponse, PokemonMoveResponse, PokemonResponse } from './types'
import { formatApiString, getIdFromFetchUrl } from '../../lib/utils'

// API Configuration
const POKEMON_API_BASE_URL = 'https://pokeapi.co/api/v2'
const FIRST_GENERATION_LIMIT = 151
const FIRST_GENERATION_OFFSET = 0

export const fetchAllPokemon = async (): Promise<PokemonListItem[]> => {
  try {
    const url = `${POKEMON_API_BASE_URL}/pokemon?limit=${FIRST_GENERATION_LIMIT}&offset=${FIRST_GENERATION_OFFSET}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Failed to fetch Pokemon list: ${response.status} ${response.statusText}`)
    }

    const data: PokemonListResponse = await response.json() as PokemonListResponse

    return data.results.map((pokemonData, index) => {
      const pokedexId = index + 1
      return {
        pokedexId: pokedexId.toString(),
        name: formatApiString(pokemonData.name),
      }
    })
  } catch (error) {
    console.error('Error fetching Pokemon list:', error)
    throw new Error('Failed to load Pokemon list. Please try again.')
  }
}

export const fetchPokemonById = async (pokemonId: string): Promise<Pokemon | null> => {
  try {
    const url = `${POKEMON_API_BASE_URL}/pokemon/${pokemonId}`
    const response = await fetch(url)

    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`Failed to fetch Pokemon: ${response.status} ${response.statusText}`)
    }

    const data: PokemonResponse = await response.json() as PokemonResponse

    return {
      pokedexId: data.id.toString(),
      name: formatApiString(data.name),
      avatar: data.sprites.front_default,
      moves: [],
      availableMoves: data.moves.map(({ move }) => ({
        id: getIdFromFetchUrl(move.url),
        name: formatApiString(move.name),
        type: 'normal', // Note: You might want to fetch actual move types from the move endpoint
      } as PokemonMoves)),
    }
  } catch (error) {
    console.error(`Error fetching Pokemon with ID ${pokemonId}:`, error)
    throw new Error('Failed to load Pokemon details. Please try again.')
  }
}

export const fetchMoveById = async (moveId: string): Promise<PokemonMoves | null> => {
  try {
    const url = `${POKEMON_API_BASE_URL}/move/${moveId}`
    const response = await fetch(url)

    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`Failed to fetch Move: ${response.status} ${response.statusText}`)
    }

    const { name, type } = await response.json() as PokemonMoveResponse

    return {
      id: moveId,
      name: formatApiString(name),
      type: type.name,
    }
  } catch (error) {
    console.error(`Error fetching Move with ID ${moveId}:`, error)
    throw new Error('Failed to load Move details. Please try again.')
  }
}
