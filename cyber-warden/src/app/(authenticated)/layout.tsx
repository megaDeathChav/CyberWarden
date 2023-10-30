import React from 'react';
import './globals.css';
import type { Metadata } from 'next'
import Providers from './providers';


import { SidebarWithLogo } from '@/components/Sidebar';

// maybe experiment with fonts from here (ctrl + click) should take u to a file where the font names are defined
import { Inter } from 'next/font/google'
import { FooterWithLogo } from '@/components/Footer';

// default root layout stuff
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cyber Warden',
}


// default root layout stuff
// type Theme = 'light' | 'dark';
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gradient-to-t from-white via-gray-300 to-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}>
        <Providers>
            <SidebarWithLogo />
            <div className="ml-[16rem]">
              {children}
            </div>
          {/* <FooterWithLogo /> */}
        </Providers>
      </body>
    </html>
  );
}
