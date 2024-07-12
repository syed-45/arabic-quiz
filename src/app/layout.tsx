import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arabic Quiz App',
  description: 'An app which quizzes you on Arabic vocabulary based on the Al Arabiyyah Bayna Yadayk series',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className+' '+'mx-auto max-w-screen-xl min-w-96'}>{children}</body>
    </html>
  )
}
