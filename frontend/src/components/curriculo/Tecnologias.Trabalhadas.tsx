import { Tecnologia } from '@core'

export interface TecnologiasTrabalhadasProps {
	tecnologias: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
	return props.tecnologias ? (
		<div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border border-zinc-800 rounded-2xl">
			<div className="flex flex-wrap justify-center gap-x-3">
				{props.tecnologias.map((tecno) => {
					return (
						<div key={tecno.id}>
							<span className="text-red-500 font-bold">#</span>
							<span>{tecno.nome}</span>
						</div>
					)
				})}
			</div>
		</div>
	) : null
}
