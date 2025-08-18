import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "./theme-provider"

export const fetchCache = 'default-cache'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arabic Quiz App',
  description: 'An app to quiz you on Arabic vocabulary based on the Al Arabiyyah Bayna Yadayk series',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  suppressHydrationWarning={true}>
      <body className={inter.className+' '+'mx-auto max-w-screen-xl min-w-96'}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
