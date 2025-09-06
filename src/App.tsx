import pokeball from './assets/svgs/pokeball.svg'
import { Header } from './components/layout/Header'
import { pokemonList } from './lib/pokemonList'
import { NoPokemonMessage } from './components/layout/NoPokemonMessage'
import { CardGrid } from './components/layout/CardGrid'
import { PokemonCard } from './components/pokemon/PokemonCard'

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <Header
        title="Pokemon Training"
        icon={pokeball}
        bgColor="red"
      />
      <main className="flex-1 p-4 sm:p-6">
        {pokemonList.length > 0 ? (
          <CardGrid>
            {pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </CardGrid>
        ) : (
          <NoPokemonMessage />
        )}
      </main>
    </div>
  )
}

export default App
