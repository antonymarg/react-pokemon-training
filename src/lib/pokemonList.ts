import type { Pokemon } from './types'

export const pokemonList: Pokemon[] = [
  {
    pokedexId: '025',
    name: 'Pikachu',
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    moves: [{ name: 'Thunderbolt', type: 'electric' }, { name: 'Quick Attack', type: 'normal' }, { name: 'Tail Whip', type: 'normal' }, { name: 'Thunder Wave', type: 'electric' }],
    availableMoves: [
      { name: 'Thunderbolt', type: 'electric' }, { name: 'Thunder', type: 'electric' }, { name: 'Thunder Wave', type: 'electric' },
      { name: 'Spark', type: 'electric' }, { name: 'Discharge', type: 'electric' }, { name: 'Quick Attack', type: 'normal' },
      { name: 'Tail Whip', type: 'normal' }, { name: 'Agility', type: 'psychic' }, { name: 'Double Team', type: 'normal' },
      { name: 'Iron Tail', type: 'steel' }, { name: 'Slam', type: 'normal' },
    ],
  },
  {
    pokedexId: '006',
    name: 'Charizard',
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    moves: [{ name: 'Fire Blast', type: 'fire' }, { name: 'Fly', type: 'flying' }, { name: 'Dragon Claw', type: 'dragon' }, { name: 'Flame Charge', type: 'fire' }],
    availableMoves: [
      { name: 'Fire Blast', type: 'fire' }, { name: 'Flamethrower', type: 'fire' }, { name: 'Flame Charge', type: 'fire' },
      { name: 'Fire Punch', type: 'fire' }, { name: 'Fly', type: 'flying' }, { name: 'Wing Attack', type: 'flying' },
      { name: 'Air Slash', type: 'flying' }, { name: 'Dragon Claw', type: 'dragon' }, { name: 'Dragon Pulse', type: 'dragon' },
      { name: 'Solar Beam', type: 'grass' }, { name: 'Earthquake', type: 'ground' }, { name: 'Thunder Punch', type: 'electric' },
    ],
  },
  {
    pokedexId: '001',
    name: 'Bulbasaur',
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    moves: [{ name: 'Vine Whip', type: 'grass' }, { name: 'Tackle', type: 'normal' }, { name: 'Leech Seed', type: 'grass' }],
    availableMoves: [
      { name: 'Vine Whip', type: 'grass' }, { name: 'Razor Leaf', type: 'grass' }, { name: 'Leech Seed', type: 'grass' },
      { name: 'Solar Beam', type: 'grass' }, { name: 'Petal Dance', type: 'grass' }, { name: 'Tackle', type: 'normal' },
      { name: 'Take Down', type: 'normal' }, { name: 'Growl', type: 'normal' }, { name: 'Sludge Bomb', type: 'poison' },
      { name: 'Toxic', type: 'poison' }, { name: 'Sleep Powder', type: 'grass' },
    ],
  },
  {
    pokedexId: '009',
    name: 'Blastoise',
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    moves: [{ name: 'Hydro Pump', type: 'water' }, { name: 'Ice Beam', type: 'ice' }, { name: 'Earthquake', type: 'ground' }, { name: 'Surf', type: 'water' }],
    availableMoves: [
      { name: 'Hydro Pump', type: 'water' }, { name: 'Surf', type: 'water' }, { name: 'Water Gun', type: 'water' },
      { name: 'Bubble Beam', type: 'water' }, { name: 'Ice Beam', type: 'ice' }, { name: 'Blizzard', type: 'ice' },
      { name: 'Earthquake', type: 'ground' }, { name: 'Body Slam', type: 'normal' }, { name: 'Rest', type: 'psychic' },
      { name: 'Skull Bash', type: 'normal' }, { name: 'Flash Cannon', type: 'steel' },
    ],
  },
  {
    pokedexId: '094',
    name: 'Gengar',
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png',
    moves: [{ name: 'Shadow Ball', type: 'ghost' }, { name: 'Sludge Bomb', type: 'poison' }, { name: 'Hypnosis', type: 'psychic' }, { name: 'Dream Eater', type: 'psychic' }],
    availableMoves: [
      { name: 'Shadow Ball', type: 'ghost' }, { name: 'Shadow Punch', type: 'ghost' }, { name: 'Night Shade', type: 'ghost' },
      { name: 'Sludge Bomb', type: 'poison' }, { name: 'Toxic', type: 'poison' }, { name: 'Hypnosis', type: 'psychic' },
      { name: 'Dream Eater', type: 'psychic' }, { name: 'Psychic', type: 'psychic' }, { name: 'Thunder', type: 'electric' },
      { name: 'Focus Blast', type: 'fighting' }, { name: 'Dark Pulse', type: 'dark' },
    ],
  },
  {
    pokedexId: '065',
    name: 'Alakazam',
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png',
    moves: [{ name: 'Psychic', type: 'psychic' }, { name: 'Teleport', type: 'psychic' }, { name: 'Future Sight', type: 'psychic' }, { name: 'Recover', type: 'normal' }],
    availableMoves: [
      { name: 'Psychic', type: 'psychic' }, { name: 'Psybeam', type: 'psychic' }, { name: 'Future Sight', type: 'psychic' },
      { name: 'Teleport', type: 'psychic' }, { name: 'Calm Mind', type: 'psychic' }, { name: 'Recover', type: 'normal' },
      { name: 'Shadow Ball', type: 'ghost' }, { name: 'Focus Blast', type: 'fighting' }, { name: 'Thunder Wave', type: 'electric' },
      { name: 'Fire Punch', type: 'fire' }, { name: 'Ice Punch', type: 'ice' }, { name: 'Thunder Punch', type: 'electric' },
    ],
  },
  {
    pokedexId: '068',
    name: 'Machamp',
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png',
    moves: [{ name: 'Dynamic Punch', type: 'fighting' }, { name: 'Cross Chop', type: 'fighting' }, { name: 'Seismic Toss', type: 'fighting' }, { name: 'Bulk Up', type: 'fighting' }],
    availableMoves: [
      { name: 'Dynamic Punch', type: 'fighting' }, { name: 'Cross Chop', type: 'fighting' }, { name: 'Close Combat', type: 'fighting' },
      { name: 'Seismic Toss', type: 'fighting' }, { name: 'Bulk Up', type: 'fighting' }, { name: 'Strength', type: 'normal' },
      { name: 'Rock Slide', type: 'rock' }, { name: 'Earthquake', type: 'ground' }, { name: 'Fire Punch', type: 'fire' },
      { name: 'Ice Punch', type: 'ice' }, { name: 'Thunder Punch', type: 'electric' },
    ],
  },
  {
    pokedexId: '131',
    name: 'Lapras',
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png',
    moves: [{ name: 'Ice Beam', type: 'ice' }, { name: 'Surf', type: 'water' }, { name: 'Psychic', type: 'psychic' }, { name: 'Sing', type: 'normal' }],
    availableMoves: [
      { name: 'Ice Beam', type: 'ice' }, { name: 'Blizzard', type: 'ice' }, { name: 'Freeze-Dry', type: 'ice' },
      { name: 'Surf', type: 'water' }, { name: 'Hydro Pump', type: 'water' }, { name: 'Psychic', type: 'psychic' },
      { name: 'Sing', type: 'normal' }, { name: 'Body Slam', type: 'normal' }, { name: 'Thunderbolt', type: 'electric' },
      { name: 'Perish Song', type: 'normal' }, { name: 'Heal Bell', type: 'normal' },
    ],
  },
  {
    pokedexId: '149',
    name: 'Dragonite',
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
    moves: [{ name: 'Dragon Rush', type: 'dragon' }, { name: 'Hurricane', type: 'flying' }, { name: 'Fire Punch', type: 'fire' }, { name: 'Thunder Punch', type: 'electric' }],
    availableMoves: [
      { name: 'Dragon Rush', type: 'dragon' }, { name: 'Dragon Claw', type: 'dragon' }, { name: 'Outrage', type: 'dragon' },
      { name: 'Hurricane', type: 'flying' }, { name: 'Wing Attack', type: 'flying' }, { name: 'Fire Punch', type: 'fire' },
      { name: 'Thunder Punch', type: 'electric' }, { name: 'Ice Punch', type: 'ice' }, { name: 'Earthquake', type: 'ground' },
      { name: 'Hyper Beam', type: 'normal' }, { name: 'Roost', type: 'flying' }, { name: 'Extreme Speed', type: 'normal' },
    ],
  },
  {
    pokedexId: '150',
    name: 'Mewtwo',
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
    moves: [{ name: 'Psychic', type: 'psychic' }, { name: 'Shadow Ball', type: 'ghost' }, { name: 'Aura Sphere', type: 'fighting' }, { name: 'Recover', type: 'normal' }],
    availableMoves: [
      { name: 'Psychic', type: 'psychic' }, { name: 'Psystrike', type: 'psychic' }, { name: 'Future Sight', type: 'psychic' },
      { name: 'Shadow Ball', type: 'ghost' }, { name: 'Aura Sphere', type: 'fighting' }, { name: 'Focus Blast', type: 'fighting' },
      { name: 'Recover', type: 'normal' }, { name: 'Calm Mind', type: 'psychic' }, { name: 'Ice Beam', type: 'ice' },
      { name: 'Thunderbolt', type: 'electric' }, { name: 'Flamethrower', type: 'fire' }, { name: 'Hyper Beam', type: 'normal' },
    ],
  },
]
