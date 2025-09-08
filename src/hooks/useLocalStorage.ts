import { useState, useEffect, useRef } from 'react'

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const hasLoadedRef = useRef(false)

  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      if (item !== null) {
        const parsed = JSON.parse(item) as T
        hasLoadedRef.current = true // Mark as loaded from localStorage
        return parsed
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
    }

    hasLoadedRef.current = true
    return defaultValue
  })
  useEffect(() => {
    if (!hasLoadedRef.current) return // Skip if not loaded yet

    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }, [key, value])

  return [value, setValue] as const
}
