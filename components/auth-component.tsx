"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

const AuthComponent = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <>
        <p>Not signed in.</p>
        <Button onClick={() => signIn("github")}>Sign in with GitHub</Button>
      </>
    );
  }

  return (
    <div>
      You are {status}{" "}
      {status === "authenticated" && (
        <>
          <Image
            src={session.user?.image as string}
            alt="Avatar"
            width={100}
            height={100}
            priority
          />
          <div>{session.user?.name}</div>
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      )}
    </div>
  );
};

export default AuthComponent;
