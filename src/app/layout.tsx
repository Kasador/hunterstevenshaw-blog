import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Geist, Geist_Mono, DynaPuff } from 'next/font/google'
import { currentUser } from '@clerk/nextjs/server';
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const user = await currentUser();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${fontDynaPuff} ${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="flex justify-between items-center p-4 gap-4 h-16">
          <Nav />
            <div className="flex justify-end items-center p-4 gap-4 h-16">
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <Button className='text-sm m-2 p-4'>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <span>{user?.fullName}</span>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}