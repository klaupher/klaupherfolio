import { obterProjeto } from '@/functions/projetos'
import Cabecalho from '../../../../components/shared/Cabecalho'
import Container from '@/components/shared/Container'
import CarrosselImagens from '@/components/shared/Carrossel.Imagens'
import Tecnologias from '@/components/tecnologias/Tecnologias'
import { obterReadme } from '@/functions/github'
import { ConteudoMD } from '@/components/shared/ConteudoMD'
import Readme from '@/components/projetos/Readme'

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params
	const projeto = await obterProjeto(id)

	if (!projeto) return null

	const readme = await obterReadme(projeto.repositorio)

	return (
		<div className="bg-black">
			<Cabecalho />
			<Container className="py-7 flex flex-col items-center gap-10">
				<h1 className="text-3xl font-bold">{projeto?.nome}</h1>
				<CarrosselImagens imagens={projeto.imagens.slice(1)} />
				<Tecnologias lista={projeto.tecnologias} tamanhoMenor={true} />
				<Readme markdown={readme} />
			</Container>
		</div>
	)
}
