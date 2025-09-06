export function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-white/80 p-4 backdrop-blur-sm sm:p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">⚡</span>
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          React Pokemon Training
        </h1>
      </div>
    </header>
  )
}
