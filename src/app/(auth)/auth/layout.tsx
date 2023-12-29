import '@/styles/globals.scss'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="main">
      {children}
    </main>

  )
}
