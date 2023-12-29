import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Logout',
}

export default function SignoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>lay{children}</>
}
