import { Header } from './components/layout/Header'
import { NoPokemonMessage } from './components/layout/NoPokemonMessage'
import pokeball from './assets/svgs/pokeball.svg'
import { Footer } from './components/layout/Footer'
import { PokemonGrid } from './components/pokemon/PokemonGrid'
import { PokemonCard } from './components/pokemon/PokemonCard'
import type { CaughtPokemon } from './lib/types'
import { useState } from 'react'

function App() {
  const [pokemonList, setPokemonList] = useState<CaughtPokemon[]>([])

  const addPokemon = (pokemon: CaughtPokemon) => {
    setPokemonList([...pokemonList, pokemon])
  }
  const removePokemon = (pokemon: CaughtPokemon) => {
    setPokemonList(pokemonList.filter((p) => p.uid !== pokemon.uid))
  }
  const levelUpPokemon = (pokemon: CaughtPokemon) => {
    setPokemonList(pokemonList.map((p) => p.uid === pokemon.uid ? { ...p, level: p.level + 1 } : p))
  }

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-gray-50">
        <Header
          title="Pokemon Training"
          icon={pokeball}
          bgColor="red"
        />
        <main className="flex-1 p-4 sm:p-6">
          {pokemonList.length > 0 ? (
            <PokemonGrid>
              {pokemonList.map((pokemon) => (
                <PokemonCard
                  key={pokemon.pokedexId}
                  pokemon={pokemon}
                  removePokemon={removePokemon}
                  levelUpPokemon={levelUpPokemon}
                />
              ))}
            </PokemonGrid>
          ) : (
            <NoPokemonMessage />
          )}
        </main>
        <Footer addPokemon={addPokemon} />
      </div>
      <div />
    </>
  )
}

export default App
