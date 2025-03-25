import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

export interface ConteudoMDProps {
	markdown: string
}

export function ConteudoMD({ markdown }: ConteudoMDProps) {
	return (
		<div className="markdown-body">
			<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} skipHtml={false}>
				{markdown}
			</Markdown>
		</div>
	)
}
