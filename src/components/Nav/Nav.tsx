// import Image from "next/image";
import Link from 'next/link'
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
                    <NavigationMenuTrigger>HTML</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                        <NavigationMenuLink className="w-75">Forms</NavigationMenuLink>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <Link href="/css">
                    <NavigationMenuTrigger>CSS</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                        <NavigationMenuLink className="w-75">SASS/SCSS</NavigationMenuLink>
                        <NavigationMenuLink className="w-75">TailwindCSS</NavigationMenuLink>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/javascript">
                    <NavigationMenuTrigger>JavaScript</NavigationMenuTrigger>
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