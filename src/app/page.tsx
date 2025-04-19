import {
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server';
// https://clerk.com/docs/quickstarts/nextjs-pages-router
// https://stackoverflow.com/questions/43177074/how-can-i-fix-this-violation-of-this-react-no-unescaped-entitie-of-an-eslint-r
// https://stackoverflow.com/questions/74789536/passing-function-from-server-to-client-component-next-13
// https://clerk.com/docs/references/nextjs/current-user


export default async function Home() {
  // 'use server'

  // async function handleUser() {
  //   const { user } = useUser();
  //   return user;
  // }

  const user = await currentUser();

  return (
        <div>
          <SignedIn>
            <h1 className="font-[family-name:var(--font-dynapuff)] font-extrabold text-4xl p-4 text-gray-600">Welcome back, <span className='font-thin bg-gray-200 border-8 font-sans text-purple-900 rounded-md'>{user?.firstName}</span>. You&apos;re logged-in!</h1>
          </SignedIn>
          <SignedOut>
            <h1 className="font-[family-name:var(--font-dynapuff)] font-extrabold text-4xl p-4 text-gray-600">Oh no, you&apos;re not signed-in. Sign up or sign in to see user data.</h1>
          </SignedOut>
          <h1 className="font-[family-name:var(--font-dynapuff)] font-extrabold text-4xl p-4 text-gray-600">Latest Newsfeed</h1>
            <section className="flex p-4 m-4 flex-wrap">
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
  );
}
