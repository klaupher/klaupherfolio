'use client'

import useChat from '@/hooks/useChat'
import { useState } from 'react'
import { text } from 'stream/consumers'

export default function Chat() {
	const { chatId, mensagens, adicionarMensagem } = useChat()
	const [texto, setTexto] = useState('')
	return (
		<div>
			<h1>Chat</h1>
			<h2>Chat Id: {chatId}</h2>
			<ul>
				{mensagens.map((mensagem) => (
					<li key={mensagem.id}>
						<span>{mensagem.autor}: </span>
						<span>{mensagem.texto}</span>
					</li>
				))}
			</ul>
			<input
				type="text"
				value={texto}
				className="border border-zinc-500 rounded p-2"
				onChange={(e: any) => setTexto(e.target.value)}
				onKeyDown={(e: any) => {
					if (e.key === 'Enter') {
						adicionarMensagem(texto)
						setTexto('')
					}
				}}
			/>
		</div>
	)
}
