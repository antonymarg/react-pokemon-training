export function NoPokemonMessage() {
  return (
    <div className="flex flex-1 items-center justify-center h-full w-full">
      <div className="text-center">
        <h2 className="text-6xl font-bold text-gray-600 mb-4">
          No Pokemon caught yet!
        </h2>
        <p className="text-xl text-gray-500">
          Start your Pokemon journey by catching your first Pokemon!
        </p>
      </div>
    </div>
  )
}
