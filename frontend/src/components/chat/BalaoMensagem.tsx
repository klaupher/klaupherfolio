import Mensagem from '@/model/Mensagem'
import { ConteudoMD } from '../shared/ConteudoMD'
import { IconRobot } from '@tabler/icons-react'

export interface BalaoMensagemProps {
	mensagem: Mensagem
}

export default function BalaoMensagem(props: BalaoMensagemProps) {
	return props.mensagem.lado === 'esquerdo' ? (
		<BalaoEsquerdo {...props} />
	) : (
		<BalaoDireito {...props} />
	)
}

function BalaoDireito(props: BalaoMensagemProps) {
	return (
		<div className="flex flex-col items-end">
			<span className="text-sm text-zinc-600">{props.mensagem.autor}</span>
			<div className="text-white text-end bg-red-500 sm:w-80 px-6 py-3 rounded-l-3xl rounded-br-3xl">
				<ConteudoMD markdown={props.mensagem.texto} />
			</div>
		</div>
	)
}

function BalaoEsquerdo(props: BalaoMensagemProps) {
	return (
		<div className="flex gap-1">
			<IconRobot size={25} />
			<div className="flex flex-col">
				<span className="text-sm text-zinc-600">{props.mensagem.autor}</span>
				<div className="text-white bg-black sm:w-80 px-6 py-3 rounded-r-3xl rounded-bl-3xl">
					<ConteudoMD markdown={props.mensagem.texto} />
				</div>
			</div>
		</div>
	)
}
