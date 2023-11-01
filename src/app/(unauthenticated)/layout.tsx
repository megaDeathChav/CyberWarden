import './globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cyber Warden',
  description: 'Generated by create next app',
}
{/* Random comment, delete afterwards **/}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-t from-blue-gray-600 via-blue-gray-200 to-blue-gray-600 flex flex-col min-h-screen items-center justify-center'>
        {children}
        <Toaster position={"top-right"}/>
      </body>
    </html>
  )
}
