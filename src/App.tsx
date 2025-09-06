import { Header } from './components/layout/Header'
import { NoPokemonMessage } from './components/layout/NoPokemonMessage'
import pokeball from './assets/svgs/pokeball.svg'
import { Footer } from './components/layout/Footer'
import { PokemonGrid } from './components/pokemon/PokemonGrid'
import { PokemonCard } from './components/pokemon/PokemonCard'
import { pokemonList } from './lib/pokemonList'
import { getPokemonUID } from './lib/utils'
import type { CaughtPokemon } from './lib/types'

function App() {
  const addPokemon = () => {}
  const removePokemon = () => {}
  const levelUpPokemon = () => {}

  const caughtPokemon:CaughtPokemon[] = pokemonList.map((pokemon) => ({ ...pokemon, level: 1, uid: getPokemonUID(pokemon) }))

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
              {caughtPokemon.map((pokemon) => (
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
