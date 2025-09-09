interface NoPokemonMessageProps {
  isDarkMode: boolean;
}

export function NoPokemonMessage({ isDarkMode }: NoPokemonMessageProps) {
  return (
    <div className="flex flex-1 items-center justify-center h-full w-full">
      <div className="text-center">
        <h2 className={`text-6xl font-bold mb-4 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          No Pokemon caught yet!
        </h2>
        <p className={`text-xl ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Start your Pokemon journey by catching your first Pokemon!
        </p>
      </div>
    </div>
  )
}
