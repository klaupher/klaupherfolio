import { useEffect, useState } from 'react'

export default function useLocalStorage<T>(key: string, initialValue: T) {
	const [storedValue, setStoredValue] = useState<T>(() => {
		const localValue = localStorage.getItem(key)
		return localValue ? JSON.parse(localValue) : initialValue
	})
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(storedValue))
	}, [key, storedValue])
	return [storedValue, setStoredValue] as const
}
