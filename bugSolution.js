```javascript
import { getSession } from 'next-auth/react';

export default async function Page({ session }) {
  // Session will be null if the user is not authenticated.
  if (!session) {
    return <div>Please sign in.</div>;
  }

  // ... rest of your component
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
```
This revised code leverages the `getSession` function from `next-auth/react` and `getServerSideProps` to handle authentication securely and reliably.  It avoids using the potentially unstable `unstable_getServerSession` and ensures a consistent behavior across different Next.js versions and setups.