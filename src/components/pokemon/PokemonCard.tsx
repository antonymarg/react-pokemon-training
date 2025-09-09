import type { CaughtPokemon } from '../../lib/types'
import { PokemonMove } from './PokemonMove'
import { Button } from '../ui/Button'
import { LevelBadge } from './LevelBadge'

interface PokemonCardProps {
  pokemon: CaughtPokemon;
  removePokemon: (pokemon: CaughtPokemon) => void;
  levelUpPokemon: (pokemon: CaughtPokemon) => void;
}

export function PokemonCard({ pokemon, removePokemon, levelUpPokemon }: PokemonCardProps) {
  return (
    <div className="rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative border bg-gradient-to-br from-white via-blue-50 to-indigo-100 border-gray-200/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 dark:border-gray-600/50">
      {pokemon.level && <LevelBadge level={pokemon.level} />}
      <div className="aspect-square w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
        <img
          src={pokemon.avatar}
          alt={`Avatar of ${pokemon.name}`}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-1 from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300">
            {pokemon.name}
          </h3>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-16" />
        </div>
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-600 dark:text-gray-300">Moves</h4>
          <div className="grid grid-cols-2 gap-3">
            {pokemon.moves.map((move) => {
              return <PokemonMove key={move.name} move={move} />
            })}
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={() => removePokemon(pokemon)}
            variant="danger"
            size="md"
            className="flex-1"
          >
            Remove
          </Button>
          <Button
            onClick={() => levelUpPokemon(pokemon)}
            variant="primary"
            size="md"
            className="flex-1"
          >
            Level up
          </Button>
        </div>
      </div>
    </div>
  )
}
