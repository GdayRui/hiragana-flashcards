import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Hiragana Flash Cards',
  description: 'Learn Japanese Hiragana characters with interactive flash cards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}