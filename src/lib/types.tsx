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
  id: string
  name: string
  avatar: string
  moves: PokemonMoves[]
}

interface PokemonMoves {
  name: string
  type: PokemonTypes
}

export type { Pokemon, PokemonMoves }
