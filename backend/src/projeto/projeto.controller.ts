import { Controller, Get, Param } from '@nestjs/common'
import { ProjetoPrisma } from './projeto.prisma'
import { Projeto } from '@core'

@Controller('projetos')
export class ProjetoController {
	constructor(private readonly repo: ProjetoPrisma) {}

	@Get()
	async obterTodos(): Promise<Projeto[]> {
		return this.repo.obterTodos()
	}

	@Get('destaques')
	async obterDestaques(): Promise<Projeto[]> {
		return this.repo.obterDestaques()
	}

	@Get(':id')
	async obterPorId(@Param('id') id: number): Promise<Projeto | null> {
		return this.repo.obterPorId(id)
	}
}
