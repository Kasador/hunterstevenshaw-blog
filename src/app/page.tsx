// import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-dynapuff)] font-extrabold text-4xl">Logbook.io</h1>
      <Link href="/login">Login</Link>
    </div>
  );
}
