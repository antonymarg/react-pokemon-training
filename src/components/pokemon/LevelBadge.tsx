export function LevelBadge({ level }: { level: number }) {
  return (
    <div className="absolute top-3 right-3 z-10">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
        Lv. {level}
      </div>
    </div>
  )
}

