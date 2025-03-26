import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel'
import Image from 'next/image'

export interface CarrosselImagensProps {
	imagens: string[]
}

export default function CarrosselImagens(props: CarrosselImagensProps) {
	return (
		<Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full">
			<CarouselContent>
				{props.imagens.map((imagem) => (
					<CarouselItem key={imagem} className="relative w-full h-96">
						<Image
							src={imagem}
							alt="Imagem"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="object-cover"
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
