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
                <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <Link href="/html">
                    <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent className="flex justify-center text-left p-5">
                        <Image 
                        src="/html-css-js_v3.png"
                        alt="HTML, CSS, and JavaScript graphic"
                        width={100}
                        height={100}
                        className="p-5"/>
                        <ul className="w-75">
                            <li><NavigationMenuLink className="w-35 text-2xl">HTML</NavigationMenuLink>
                                <span className="text-md w-50">Learn all about HTML and test...</span></li>
                            <li><NavigationMenuLink className="w-35 text-2xl">CSS</NavigationMenuLink>
                                <span className="text-md w-50">Learn all about HTML and test...</span></li>
                            <li><NavigationMenuLink className="w-35 text-2xl">JavaScript</NavigationMenuLink>
                                <span className="text-md w-50">Learn all about HTML and test...</span></li>
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
                    <NavigationMenuItem>
                    <Link href="/login">
                    <NavigationMenuLink className="w-25 text-center text-1xl font-extrabold">
                        Login
                    </NavigationMenuLink>
                    </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
            </div>
    )
}