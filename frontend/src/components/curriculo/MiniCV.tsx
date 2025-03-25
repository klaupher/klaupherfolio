import Image from 'next/image'

export default function MiniCV() {
	return (
		<div
			className="
            flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row 
            items-center md:items-start lg:items-center xl:items-start
            bg-black border border-zinc-800 rounded-2xl px-6 pt-6"
		>
			<div className="relative min-w-64 h-70 xl:self-center pb-3">
				<Image src="/minha-foto.png" alt="Foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						className="
                            bg-gradient-to-r from-red-500 via-white to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        "
					>
						Fernanda Bernardes
					</span>
					<span>Fullstack development and teacher</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Desenvolvedor fullstack e lider técnico em projetos dedicados. São mais de 20 anos como
					desenvolvedor, sendo 10 também atuando como professor. Atuou em grandes multinacionais ao
					longo desses anos, trabalhou em diversos segmentos como desenvolvedor de softwares e
					arquiteto de software em grandes projetos para o governo municipal.
				</p>
			</div>
		</div>
	)
}
