import { useState } from 'react'
import { Modal } from '../layout/Modal'
import { ModalHeader } from '../layout/Modal/ModalHeader'
import { Button } from '../atoms/Button'
import { PokemonMove } from './PokemonMove'
import { pokemonList } from '../../lib/pokemonList'
import type { CaughtPokemon, Pokemon, PokemonMoves } from '../../lib/types'
import { getPokemonUID } from '../../lib/utils'

interface AddPokemonModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onAddPokemon: (pokemon: CaughtPokemon) => void;
}

export function AddPokemonModal({ isOpen, setIsOpen, onAddPokemon }: AddPokemonModalProps) {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)
  const [selectedMoves, setSelectedMoves] = useState<PokemonMoves[]>([])
  const [level, setLevel] = useState<number>(1)
  const [errors, setErrors] = useState<{ pokemon?: string; moves?: string; level?: string }>({})

  const handlePokemonChange = (pokemonId: string) => {
    const pokemon = pokemonList.find(p => p.pokedexId === pokemonId)
    if (pokemon) {
      setSelectedPokemon(pokemon)
      setSelectedMoves([]) // Reset moves when Pokemon changes
    }
  }

  const handleMoveToggle = (move: PokemonMoves) => {
    const isSelected = selectedMoves.some(m => m.name === move.name)

    if (isSelected) {
      setSelectedMoves(selectedMoves.filter(m => m.name !== move.name))
    } else if (selectedMoves.length < 4) {
      setSelectedMoves([...selectedMoves, move])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: { pokemon?: string; moves?: string; level?: string } = {}

    if (!selectedPokemon) {
      newErrors.pokemon = 'You must select a Pokemon.'
    }

    if (selectedMoves.length === 0) {
      newErrors.moves = 'You must select at least one move.'
    }

    if (level < 1 || level > 100) {
      newErrors.level = 'Level must be between 1 and 100.'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0 && selectedPokemon) {
      const caughtPokemon: CaughtPokemon = {
        ...selectedPokemon,
        moves: selectedMoves,
        level,
        uid: getPokemonUID(selectedPokemon),
      }

      onAddPokemon(caughtPokemon)
      handleClose()
    }
  }

  const handleClose = () => {
    setSelectedPokemon(null)
    setSelectedMoves([])
    setLevel(1)
    setErrors({})
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="p-6 max-h-[80vh] overflow-y-auto">
        <ModalHeader
          title="Catch a new Pokemon"
          subtitle="Select a Pokemon, choose moves, and set level."
          onClose={handleClose}
        />
        <div className={selectedPokemon ? 'md:grid md:grid-cols-2 md:gap-8' : ''}>
          {/* Left Column - Form Controls */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Pokemon Selection Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Select Pokemon
              </label>
              <select
                value={selectedPokemon?.pokedexId || ''}
                onChange={(e) => handlePokemonChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="">Choose a Pokemon...</option>
                {pokemonList.map((pokemon) => (
                  <option key={pokemon.pokedexId} value={pokemon.pokedexId}>
                    #{pokemon.pokedexId} - {pokemon.name}
                  </option>
                ))}
              </select>
              {errors.pokemon && (
                <p className="text-sm text-red-600">{errors.pokemon}</p>
              )}
            </div>

            {/* Mobile Pokemon Preview - Only show on mobile */}
            {selectedPokemon && (
              <div className="md:hidden flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={selectedPokemon.avatar}
                  alt={selectedPokemon.name}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    #{selectedPokemon.pokedexId} - {selectedPokemon.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedPokemon.availableMoves.length} moves available
                  </p>
                </div>
              </div>
            )}

            {/* Move Selection */}
            {selectedPokemon && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Select Moves (Choose up to 4)
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto border rounded-md p-3">
                  {selectedPokemon.availableMoves.map((move, index) => {
                    const isSelected = selectedMoves.some(m => m.name === move.name)
                    const isDisabled = !isSelected && selectedMoves.length >= 4

                    return (
                      <button
                        key={`${move.name}-${index}`}
                        type="button"
                        onClick={() => handleMoveToggle(move)}
                        disabled={isDisabled}
                        className={`px-3 py-2 text-sm font-medium rounded text-left transition-colors ${
                          isSelected
                            ? 'bg-red-100 text-red-800 border-2 border-red-300'
                            : isDisabled
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {move.name}
                        <span className="ml-1 text-xs opacity-70">({move.type})</span>
                      </button>
                    )
                  })}
                </div>
                <p className="text-sm text-gray-500">
                  Selected: {selectedMoves.length}/4 moves
                </p>
                {errors.moves && (
                  <p className="text-sm text-red-600">{errors.moves}</p>
                )}
              </div>
            )}

            {/* Level Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Level
              </label>
              <input
                type="number"
                min="1"
                max="100"
                value={level}
                onChange={(e) => setLevel(parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Enter level (1-100)"
              />
              {errors.level && (
                <p className="text-sm text-red-600">{errors.level}</p>
              )}
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                onClick={handleClose}
                variant="secondary"
                size="md"
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="danger"
                size="md"
                className="flex-1"
              >
                Get Pokemon!
              </Button>
            </div>
          </form>

          {/* Right Column - Pokemon Display (Desktop Only) */}
          {selectedPokemon && (
            <div className="hidden md:flex md:flex-col md:items-center md:justify-start md:space-y-4">
              <div className="text-center">
                <img
                  src={selectedPokemon.avatar}
                  alt={selectedPokemon.name}
                  className="w-48 h-48 object-contain mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  #{selectedPokemon.pokedexId} - {selectedPokemon.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedPokemon.availableMoves.length} moves available
                </p>

                {/* Selected moves preview */}
                {selectedMoves.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Selected Moves:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedMoves.map((move, index) => (
                        <PokemonMove key={index} move={move} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}
