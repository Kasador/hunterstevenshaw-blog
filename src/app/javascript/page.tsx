import Link from 'next/link'
import { Button } from "@/components/ui/button"
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

export default function JavaScript() {
    return (
        <div>
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
            <NavigationMenuLink className="w-75">Link #1</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/css">
          <NavigationMenuTrigger>CSS</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <NavigationMenuLink className="w-75">Link #2</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="/javascript">
          <NavigationMenuTrigger>JavaScript</NavigationMenuTrigger>
            </Link>
          <NavigationMenuContent>
            <NavigationMenuLink className="w-75">Link #3</NavigationMenuLink>
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
            <h1 className="font-[family-name:var(--font-dynapuff)] font-extrabold text-4xl p-2">JavaScript</h1>
            <Button className='text-2xl m-5 p-5'>
                <Link href="/">Home</Link>
            </Button>
        </div>
    )
}