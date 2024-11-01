"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

/**
 * Only required to wrap client components that need to use the useSession() hook.
 */
export default function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
