type PokemonTypes =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy'

interface Pokemon {
  pokedexId: string
  name: string
  avatar: string
  moves: PokemonMoves[]
  availableMoves: PokemonMoves[]
}

interface CaughtPokemon extends Pokemon {
  level: number
  uid: string
}

interface PokemonMoves {
  name: string
  type: PokemonTypes
}

export type { Pokemon, PokemonMoves, CaughtPokemon }
