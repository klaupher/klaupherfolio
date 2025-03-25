import { Projeto } from '@core'
import Image from 'next/image'
import Link from 'next/link'

export interface ProjetoProps {
	projeto: Projeto
}
export default function ItemProjeto(props: ProjetoProps) {
	return (
		<Link href={`/projeto/${props.projeto.id}`}>
			<div
				className="
                    relative rounded-2xl overflow-hidden border border-zinc-800
                    min-w-64 min-h-64 "
			>
				<Image
					src={props.projeto.imagens[0]}
					alt={props.projeto.nome}
					fill
					// objectFit="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
		</Link>
	)
}
