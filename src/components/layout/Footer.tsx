import { useState } from 'react'
import type { CaughtPokemon } from '../../lib/types'
import { Button } from '../ui/Button'
import { AddPokemonModal } from '../pokemon/AddPokemonModal'

interface FooterProps {
  addPokemon: (pokemon: CaughtPokemon) => void;
}

export function Footer({ addPokemon }: FooterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <footer className="sticky bottom-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
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
      />
    </>
  )
}
