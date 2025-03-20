import { Controller, Get } from '@nestjs/common'
import { Tecnologia } from '@core'
import { TecnologiaPrisma } from './tecnologia.prisma'

@Controller('tecnologias')
export class TecnologiaController {
	constructor(private readonly repo: TecnologiaPrisma) {}

	@Get()
	async obterTodas(): Promise<Partial<Tecnologia>[]> {
		return this.repo.obterTodas()
	}

	@Get('destaques')
	async obterDestaques(): Promise<Partial<Tecnologia>[]> {
		return this.repo.obterDestaques()
	}
}
