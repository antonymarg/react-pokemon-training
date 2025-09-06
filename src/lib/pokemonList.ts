import type { Pokemon } from './types'

export const pokemonList: Pokemon[] = [
  {
    id: '1',
    name: 'Pikachu',
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    moves: [{ name: 'Thunderbolt', type: 'electric' }, { name: 'Quick Attack', type: 'normal' }, { name: 'Tail Whip', type: 'normal' }, { name: 'Thunder Wave', type: 'electric' }],
  },
  {
    id: '2',
    name: 'Charizard',
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    moves: [{ name: 'Fire Blast', type: 'fire' }, { name: 'Fly', type: 'flying' }, { name: 'Dragon Claw', type: 'dragon' }, { name: 'Flame Charge', type: 'fire' }],
  },
  {
    id: '3',
    name: 'Bulbasaur',
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    moves: [{ name: 'Vine Whip', type: 'grass' }, { name: 'Tackle', type: 'normal' }, { name: 'Leech Seed', type: 'grass' }],
  },
] as const
