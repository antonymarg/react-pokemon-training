import { Header } from './components/layout/Header'
import { pokemonList } from './lib/pokemonList'
import pokeball from './assets/svgs/pokeball.svg'
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
        <CardGrid>
          <PokemonCard pokemon={pokemonList[0]} />
          <PokemonCard pokemon={pokemonList[1]} />
          <PokemonCard pokemon={pokemonList[2]} />
        </CardGrid>
      </main>
    </div>
  )
}

export default App
