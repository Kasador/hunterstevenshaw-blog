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


export default function Nav() {
    return (
        <div className="flex mx-2 justify-between">
                <Link href="/">
                <h1 className="font-[family-name:var(--font-dynapuff)] font-extrabold text-4xl p-2">Logbook.io</h1>
                </Link>
                <NavigationMenu className="flex justify-between items-center p-4 gap-4 h-16">
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <Link href="/html">
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
                    <Link href="/css">
                    <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                        <NavigationMenuLink className="w-75">SASS/SCSS</NavigationMenuLink>
                        <NavigationMenuLink className="w-75">TailwindCSS</NavigationMenuLink>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/javascript">
                    <NavigationMenuTrigger>Github</NavigationMenuTrigger>
                        </Link>
                    <NavigationMenuContent>
                        <NavigationMenuLink className="w-75">ReactJS</NavigationMenuLink>
                        <NavigationMenuLink className="w-75">NextJS</NavigationMenuLink>
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
                </NavigationMenu>
            </div>
    )
}