import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Spinner({ size = 'md', className = '' }: SpinnerProps) {
  const { isDarkMode } = useContext(ThemeContext)
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <div className={`animate-spin rounded-full border-2 ${
      isDarkMode
        ? 'border-gray-600 border-t-red-400'
        : 'border-gray-300 border-t-red-500'
    } ${sizeClasses[size]} ${className}`}>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
