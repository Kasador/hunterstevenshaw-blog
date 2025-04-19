import {
  ClerkProvider,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'

// https://clerk.com/docs/quickstarts/nextjs-pages-router

export default function Home() {
  return (
      <ClerkProvider>
        <div>
          <SignedIn>
            <h1>Welcome, you're signed-in.</h1>
          </SignedIn>
          <SignedOut>
            <h1>Oh no, you're not signed-in.</h1>
          </SignedOut>
        </div>
      </ClerkProvider>
  );
}
