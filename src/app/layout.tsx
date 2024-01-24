import { Kalam } from 'next/font/google'
 
const kalam = Kalam({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={kalam.className}>
      <body>{children}</body>
    </html>
  )
}