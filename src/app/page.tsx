import {
  ClerkProvider,
  SignedIn,
  SignedOut
} from '@clerk/nextjs'

export default function Home() {

  return (
    <div>
      <ClerkProvider>
        <SignedIn>
          <h1>Welcome, you're signed-in.</h1>
        </SignedIn>
        <SignedOut>
          <h1>Oh no, you're not signed-in.</h1>
        </SignedOut>
      </ClerkProvider>
    </div>
  );
}
