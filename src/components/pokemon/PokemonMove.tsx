import type { PokemonMoves } from '../../lib/types'

const TYPE_COLORS = {
  normal: { bg: '#A8A878', border: '#6D6D4E', text: '#000000' },
  fire: { bg: '#EE6B2F', border: '#9C531F', text: '#ffffff' },
  water: { bg: '#678FEF', border: '#445E9C', text: '#ffffff' },
  electric: { bg: '#F7CF2E', border: '#A1871F', text: '#000000' },
  grass: { bg: '#77C850', border: '#4E8234', text: '#ffffff' },
  ice: { bg: '#98D5D7', border: '#638D8D', text: '#000000' },
  fighting: { bg: '#BF3029', border: '#7D1F1A', text: '#ffffff' },
  poison: { bg: '#A040A0', border: '#682A68', text: '#ffffff' },
  ground: { bg: '#E0C068', border: '#927D44', text: '#000000' },
  flying: { bg: '#A890F0', border: '#6D5E9C', text: '#ffffff' },
  psychic: { bg: '#EF5350', border: '#9C2B2E', text: '#ffffff' },
  bug: { bg: '#A8B720', border: '#6D7815', text: '#ffffff' },
  rock: { bg: '#B8A038', border: '#786824', text: '#000000' },
  ghost: { bg: '#705898', border: '#493963', text: '#ffffff' },
  dragon: { bg: '#6F35FC', border: '#4924A1', text: '#ffffff' },
  dark: { bg: '#705848', border: '#49392F', text: '#ffffff' },
  steel: { bg: '#B7B7CE', border: '#787887', text: '#000000' },
  fairy: { bg: '#EE99AC', border: '#9C6470', text: '#000000' },
} as const

export function PokemonMove({ move }: { move: PokemonMoves }) {
  const colors = TYPE_COLORS[move.type]
  return (
    <div
      key={move.name}
      className="w-full px-3 py-2 text-sm font-bold rounded border-2 shadow-sm hover:shadow-md text-center"
      style={{
        backgroundColor: colors.bg,
        borderColor: colors.border,
        color: colors.text,
        filter: 'brightness(1.05)',
      }}
    >
      {move.name}
    </div>
  )
}
