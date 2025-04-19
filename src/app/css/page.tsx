
import { Button } from "@/components/ui/button"
// import Nav from "@/components/Nav/Nav"
import Link from 'next/link'

export default function CSS() {
    return (
        <div>
            <h1 className="font-[family-name:var(--font-dynapuff)] font-extrabold text-4xl p-2">CSS</h1>
            <Button className='text-2xl m-5 p-5'>
                <Link href="/">Home</Link>
            </Button>
        </div>
    )
}