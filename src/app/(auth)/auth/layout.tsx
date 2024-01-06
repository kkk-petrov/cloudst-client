import Providers from '@/components/providers/providers'
import '@/styles/globals.scss'
import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Signup',
  description: 'Signup',
}

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers session={session}>
          <main className="main">
            {children}
          </main>
        </Providers>
      </body>
    </html>

  )
}
