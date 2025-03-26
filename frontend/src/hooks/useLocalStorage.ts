'use client'
import { useEffect, useState } from 'react'

export default function useLocalStorage<T>(chave: string, valorInicial: T) {
	const [valor, setValor] = useState<T>(() => {
		const valorLocal = localStorage.length > 0 ? localStorage.getItem(chave) : null
		return valorLocal ? JSON.parse(valorLocal) : valorInicial
	})

	useEffect(() => {
		localStorage.setItem(chave, JSON.stringify(valor))
		console.log(localStorage.getItem('mensagens'))
	}, [chave, valor])

	return [valor, setValor] as const
}
