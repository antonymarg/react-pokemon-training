import type { Pokemon } from '../../lib/types'
import { PokemonMove } from './PokemonMove'

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl relative">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={pokemon.avatar}
          alt={`Avatar of ${pokemon.name}`}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          data-ai-hint="pokemon"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          {pokemon.name}
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {pokemon.moves.map((move) => {
            return <PokemonMove key={move.name} move={move} />
          })}
        </div>
      </div>
    </div>
  )
}
