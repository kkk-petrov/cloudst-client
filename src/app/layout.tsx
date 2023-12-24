import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import { Sidebar } from '@/components/sidebar/sidebar'
import { Topbar } from '@/components/topbar/topbar'
import Providers from '@/components/providers/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
        <Sidebar />

        <div className="content">
          <Topbar />
            {children}
        </div>

        </Providers>
      </body>
    </html>
  )
}
