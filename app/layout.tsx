import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'skillswapHub',
  description: 'SkillSwapHub - Connect, Learn, and Grow Together',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
