import { Header } from './components/layout/Header'
import { NoPokemonMessage } from './components/layout/NoPokemonMessage'
import { Footer } from './components/layout/Footer'
import { PokemonGrid } from './components/pokemon/PokemonGrid'
import { PokemonCard } from './components/pokemon/PokemonCard'
import pokeball from './assets/svgs/pokeball.svg'
import { usePokemon } from './hooks/usePokemon'
import { Spinner } from './components/ui/Spinner'
import { useDarkMode } from './hooks/useDarkMode'

function App() {
  const { availablePokemon, caughtPokemon, addPokemon, removePokemon, levelUpPokemon, isLoading } = usePokemon()
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  if (isLoading) {
    return (
      <div className={`flex justify-center items-center h-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <Spinner isDarkMode={isDarkMode} />
      </div>
    )
  }

  return (
    <div className={`flex min-h-screen w-full flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header
        title="Pokemon Training"
        icon={pokeball}
        bgColor="red"
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main className="flex-1 p-4 sm:p-6">
        {caughtPokemon.length > 0 ? (
          <PokemonGrid>
            {caughtPokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.uid}
                pokemon={pokemon}
                removePokemon={removePokemon}
                levelUpPokemon={levelUpPokemon}
                isDarkMode={isDarkMode}
              />
            ))}
          </PokemonGrid>
        ) : (
          <NoPokemonMessage isDarkMode={isDarkMode} />
        )}
      </main>
      <Footer
        addPokemon={addPokemon}
        availablePokemon={availablePokemon}
        isDarkMode={isDarkMode}
      />
    </div>
  )
}

export default App
