import { DarkModeToggle } from '../ui/DarkModeToggle'

interface HeaderProps {
  title: string
  icon: string
  bgColor: 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'orange' | 'teal' | 'cyan' | 'gray'
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const colorMap = {
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  orange: 'bg-orange-500',
  teal: 'bg-teal-500',
  cyan: 'bg-cyan-500',
  gray: 'bg-gray-500',
}

export function Header({ title, icon, bgColor, isDarkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header className={`sticky top-0 z-10 flex items-center justify-between ${colorMap[bgColor]} p-4 backdrop-blur-sm sm:p-6 shadow-sm`}>
      <div className="flex items-center gap-3">
        <img src={icon} alt="icon" className="w-8 h-8" />
        <h1 className="text-xl font-bold text-white sm:text-2xl">
          {title}
        </h1>
      </div>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
    </header>
  )
}
