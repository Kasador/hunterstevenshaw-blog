import Image from "next/image";
import Link from 'next/link'
// https://nextjs.org/docs/pages/api-reference/components/image
// import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button"
import { currentUser } from '@clerk/nextjs/server';

export default async function Nav() {
    const user = await currentUser();

    return (
        <header className="flex mx-2 justify-between flex-wrap">
            <h1 className="font-[family-name:var(--font-dynapuff)] font-extrabold text-4xl p-2 flex justify-start">
                <Link href="/">Logbook.io</Link>
            </h1>
            <NavigationMenu className="flex justify-end items-center p-4 gap-4 h-20">
            <NavigationMenuList>
                <NavigationMenuItem>
                <Link href="/learn">
                <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="flex justify-center text-left p-5">
                    <Image 
                    src="/html-css-js_v8.png"
                    alt="HTML, CSS, and JavaScript graphic"
                    width={140}
                    height={100}
                    className="p-5"/>
                    <ul className="w-75">
                        <li><NavigationMenuLink className="w-30 text-lg text-center font-extrabold font-[family-name:var(--font-dynapuff)]">HTML</NavigationMenuLink>
                            <span className="text-sm w-60">HTML is the standard markup language used to create web pages.</span></li>
                        <li><NavigationMenuLink className="w-30 text-lg text-center font-extrabold font-[family-name:var(--font-dynapuff)]">CSS</NavigationMenuLink>
                            <span className="text-sm w-60">CSS is a stylesheet language used to define the visual appearance of a webpage.</span></li>
                        <li><NavigationMenuLink className="w-30 text-lg text-center font-extrabold font-[family-name:var(--font-dynapuff)]">JavaScript</NavigationMenuLink>
                            <span className="text-sm w-60">JavaScript is a programming language used to add interactivity and dynamic behavior to a webpage.</span></li>
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <Link href="/dev-tools">
                <NavigationMenuTrigger>Dev Tools</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                    <NavigationMenuLink className="w-75">Vercel</NavigationMenuLink>
                    <NavigationMenuLink className="w-75">TailwindCSS</NavigationMenuLink>
                </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/github">
                <NavigationMenuTrigger>Github</NavigationMenuTrigger>
                    </Link>
                <NavigationMenuContent>
                    <NavigationMenuLink className="w-75">hunterstevenshaw-com</NavigationMenuLink>
                    <NavigationMenuLink className="w-75">hunterstevenshaw-blog</NavigationMenuLink>
                </NavigationMenuContent>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                <Link href="/login">
                <NavigationMenuLink className="w-25 text-center text-1xl font-extrabold">
                    Login
                </NavigationMenuLink>
                </Link>
                </NavigationMenuItem> */}
            </NavigationMenuList>
            <div className="flex justify-end items-center p-4 gap-4 h-16">
            <ClerkProvider>
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
            </ClerkProvider>
            </div>
            </NavigationMenu>
        </header>
    )
}