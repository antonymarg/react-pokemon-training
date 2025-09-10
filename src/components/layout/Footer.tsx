import { useState } from 'react'
import { type CaughtPokemon, type PokemonMoves } from '../../lib/types'
import { Button } from '../ui/Button'
import { AddPokemonModal } from '../pokemon/AddPokemonModal'
import type { PokemonListItem } from '../../api/pokemon/types'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from 'react'

interface FooterProps {
  addPokemon: (pokemon: CaughtPokemon, moveIds: PokemonMoves['id'][]) => Promise<void>
  availablePokemon: PokemonListItem[];
}

export function Footer({ addPokemon, availablePokemon }: FooterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isDarkMode } = useContext(ThemeContext)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <footer className={`sticky bottom-0 p-4 shadow-lg z-50 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gray-800 border-gray-700'
          : 'bg-white border-gray-200'
      } border-t`}>
        <div className="mx-auto flex justify-end">
          <Button
            onClick={handleOpenModal}
            size="lg"
            variant="primary"
          >
            Catch Pokemon
          </Button>
        </div>
      </footer>
      <AddPokemonModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onAddPokemon={addPokemon}
        availablePokemon={availablePokemon}
      />
    </>
  )
}
