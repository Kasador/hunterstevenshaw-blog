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
            <h1>Welcome back {user?.firstName}, you&apos;re signed-in.</h1>
          </SignedIn>
          <SignedOut>
            <h1>Oh no, you&apos;re not signed-in. Sign up or sign in to see user data.</h1>
          </SignedOut>
        </div>
  );
}
