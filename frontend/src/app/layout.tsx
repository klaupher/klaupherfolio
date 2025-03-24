import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
	title: 'Klaupher-folio',
	description: 'Portifolio de projeto de desenvolvimento web',
}

const fonte = Roboto({
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${fonte.className} antialiased`}>{children}</body>
		</html>
	)
}
