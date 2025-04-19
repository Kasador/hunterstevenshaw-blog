import {
  ClerkProvider,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'

// https://clerk.com/docs/quickstarts/nextjs-pages-router
// https://stackoverflow.com/questions/43177074/how-can-i-fix-this-violation-of-this-react-no-unescaped-entitie-of-an-eslint-r

export default function Home() {
  return (
      <ClerkProvider>
        <div>
          <SignedIn>
            <h1>Welcome, you&apos;re signed-in.</h1>
          </SignedIn>
          <SignedOut>
            <h1>Oh no, you&apos;re not signed-in. Sign up or sign in to see user data.</h1>
          </SignedOut>
        </div>
      </ClerkProvider>
  );
}
