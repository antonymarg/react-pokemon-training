import { pokemonList } from './lib/pokemonList'

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <h1 className="text-2xl font-bold p-4">Welcome to Pokemon Training</h1>
      <main className="flex-1 p-4 sm:p-6">
        Your starter is: {pokemonList[0].name}
      </main>
    </div>
  )
}

export default App
