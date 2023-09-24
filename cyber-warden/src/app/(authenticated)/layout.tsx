"use client";

import React from 'react';
import './globals.css';
import type { Metadata } from 'next'
import Providers from './providers';
import CustomSidebar from '@/components/CustomSidebar';


// maybe experiment with fonts from here (ctrl + click) should take u to a file where the font names are defined
import { Inter } from 'next/font/google'



// default root layout stuff
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cyber Warden',
  description: 'Generated by create next app',
}

// default root layout stuff

// type Theme = 'light' | 'dark';




export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

  

  return (
  
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="Cyber Warden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
        <title>Cyber Warden</title>
      </head>
      <body className={inter.className} style={{ display: 'flex', height: '100%' }}>
        <Providers>
          <div className='flex h-full'>
            <CustomSidebar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
