import {
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
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
                    <Image 
                      src="/tailwind-css.png"
                      alt="TailwindCSS logo"
                      width={300}
                      height={100}
                      className="m-auto p-10"
                    />
                    <h2 className="text-gray-900 font-extrabold text-2xl py-4">What&apos;s TailwindCSS?</h2>
                    <p className="text-gray-700"><strong>TailwindCSS</strong> takes advantage of all the lastest and greatest CSS features to make the developer frontend experience smoother and overall just that much more enjoyable. TailwindCSS is a utility-first CSS framework for developing, making, and improving UI/UX layouts in all applications without the need for external CSS stylesheets. While learning TailwindCSS I&apos;ve noticed that while developing, TailwindCSS is designed for mobile first layouts. Meaning, that as the developer, we will be going from mobile up instead of desktop down. </p>
                </article>
                <article  className="m-5 w-1/2">
                    <h2 className="text-gray-900 font-extrabold text-2xl py-4">Why mobile first?</h2>
                    <p className="text-gray-700"><strong>Mobile first</strong> should be a standard for all web developers. Developing for the web has gone more mobile as the years go by. In today&apos;s modern world, most users will be viewing and using a web application on mobile rather than desktop. The statistics for users on mobile over desktop is <a href="https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/" className='underline text-purple-700' target='_blank'>~60%+</a>. Meaning, if we as web developers are not prioritizing mobile first, we are already losing tons and tons of potential users and if the application is used for profit; money.</p>
                </article>
                <article  className="m-5 w-1/2">
                    <h2 className="text-gray-900 font-extrabold text-2xl py-4">Responsiveness within TailwindCSS</h2>
                    <p className="text-gray-700"><strong>Responsiveness</strong> is really easy to use within TailwindCSS once you realize that it&apos;s designed for mobile first. All we really need to do is start our development process for mobile view, then we work our way up. With classes like <strong>sm:text-lg</strong>, <strong>md:text-2xl</strong>, and <strong>lg:text-4xl</strong>, we would start with <strong>text-md</strong>. With this example, it will gradually increase text size as the screen view increases. <strong>Mobile. First.</strong> Honestly, it just makes the overall process that much enjoyable. Once you figure out the naming convention of the classes; <strong>God&apos;s Speed. Max&apos;d out!</strong> Below you can find my favorite cheatsheet! Happy coding!</p>
                    <br></br>
                    <a href="https://nerdcave.com/tailwind-cheat-sheet" className='underline text-purple-700 font-extrabold' target='_blank'>TailwindCSS Cheatsheet</a>
                </article>
            </section>
        </div>
  );
}
