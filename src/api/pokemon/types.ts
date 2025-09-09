import type { PokemonTypes } from '../../lib/types'
// All pokemon
export type PokemonListResponse = {
  results: PokemonListItem[]
}

export type PokemonListItem = {
  pokedexId: string
  name: string
}

// Pokemon by ID
export type PokemonResponse = {
  id: number;
  name: string;
  type: string[];
  sprites: {
    front_default: string;
  };
  moves: Array<{
    move: SimplePokemonMove
  }>;
}

interface SimplePokemonMove {
  name: string
  url: string
}

// Pokemon Move by ID
export type PokemonMoveResponse = {
  id: number
  name: string
  type: {
    name: PokemonTypes
  }
}

