// import Image from "next/image";
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-dynapuff)] font-extrabold text-4xl p-2">Logbook.io</h1>
      <Button className='text-2xl m-5 p-5'>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}
