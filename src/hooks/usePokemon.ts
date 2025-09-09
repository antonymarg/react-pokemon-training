import { useCallback, useEffect, useState } from 'react'
import { fetchAllPokemon, fetchMoveById } from '../api/pokemon'
import type { PokemonListItem } from '../api/pokemon/types'
import type { CaughtPokemon, PokemonMoves } from '../lib/types'
import { useLocalStorage } from './useLocalStorage'

export function usePokemon() {
  const [availablePokemon, setAvailablePokemon] = useLocalStorage<PokemonListItem[]>('availablePokemon', [])
  const [caughtPokemon, setCaughtPokemon] = useLocalStorage<CaughtPokemon[]>('caughtPokemon', [])
  const [pokemonMoves, setPokemonMoves] = useLocalStorage<PokemonMoves[]>('pokemonMoves', [])
  const [isLoading, setIsLoading] = useState(true)

  const getMoveData = async (moveId: string): Promise<PokemonMoves | null> => {
    const cachedMove = pokemonMoves.find((m) => m.id === moveId)
    if (cachedMove) return cachedMove

    try {
      const fetchedMove = await fetchMoveById(moveId)
      if (fetchedMove) {
        setPokemonMoves([...pokemonMoves, fetchedMove])
      }
      return fetchedMove
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error fetching move ${moveId}:`, error)
      return null
    }
  }

  const addPokemon = async (pokemon: CaughtPokemon, moveIds: PokemonMoves['id'][]) => {
    const moveResults = await Promise.all(moveIds.map(getMoveData))
    const validMoves = moveResults.filter((move): move is PokemonMoves => move !== null)

    const newPokemon = { ...pokemon, moves: validMoves }
    setCaughtPokemon([...caughtPokemon, newPokemon])
  }

  const removePokemon = (pokemon: CaughtPokemon) => {
    setCaughtPokemon(caughtPokemon.filter((p) => p.uid !== pokemon.uid))
  }

  const levelUpPokemon = (pokemon: CaughtPokemon) => {
    setCaughtPokemon(caughtPokemon.map((p) => p.uid === pokemon.uid ? { ...p, level: p.level + 1 } : p))
  }

  const loadAllPokemon = useCallback(async (): Promise<void> => {
    const pokemon = await fetchAllPokemon()
    setAvailablePokemon(pokemon)
  }, [setAvailablePokemon])

  useEffect(() => {
    void (async () => {
      try {
        await loadAllPokemon()
      } finally {
        setIsLoading(false)
      }
    })()
  }, [loadAllPokemon, setIsLoading])

  return { availablePokemon, caughtPokemon, addPokemon, removePokemon, levelUpPokemon, isLoading }
}
