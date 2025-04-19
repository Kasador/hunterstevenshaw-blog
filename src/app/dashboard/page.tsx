import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Dashboard() {
    return (
        <div>
            <h1 className="font-[family-name:var(--font-dynapuff)] font-extrabold text-4xl p-4 text-gray-600">Dashboard</h1>
            <Button className='text-2xl m-5 p-5'>
                <Link href="/">Home</Link>
            </Button>
            <section className="flex p-4 m-4">
                <article  className="m-5 w-1/2">
                    <h2 className="text-gray-900 font-extrabold text-2xl py-4">What is Lorem Ipsum?</h2>
                    <p className="text-gray-700"><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </article>
                <article  className="m-5 w-1/2">
                    <h2 className="text-gray-900 font-extrabold text-2xl py-4">What is Lorem Ipsum?</h2>
                    <p className="text-gray-700"><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </article>
                <article  className="m-5 w-1/2">
                    <h2 className="text-gray-900 font-extrabold text-2xl py-4">What is Lorem Ipsum?</h2>
                    <p className="text-gray-700"><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </article>
            </section>
        </div>
    )
}