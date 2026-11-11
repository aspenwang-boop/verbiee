import { useEffect, useState } from 'react'

export function useStored<T>(key: string, initial: T, validate: (value: unknown) => T) {
  const storageKey = `french-verb-lab.v1.${key}`
  const [value, setValue] = useState<T>(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      return saved === null ? initial : validate(JSON.parse(saved))
    } catch {
      return initial
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(value))
    } catch {
      // Keep the current session usable when storage is unavailable.
    }
  }, [storageKey, value])
  return [value, setValue] as const
}
