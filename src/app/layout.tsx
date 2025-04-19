import { type Metadata } from 'next'
import { Geist, Geist_Mono, DynaPuff } from 'next/font/google'
import './globals.css'

import Nav from "@/components/Nav/Nav"

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const fontDynaPuff = DynaPuff({
  variable: "--font-dynapuff",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'Logbook.io',
  description: 'Blog website for hunterstevenshaw.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en">
        <body className={`${fontDynaPuff} ${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Nav />
          {children}
        </body>
      </html>
  )
}