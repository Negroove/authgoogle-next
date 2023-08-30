"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  const {status} = useSession
    return (
      <div>
        <button onClick={() => signIn("google")}>Login with google</button>
      </div>
    );
}
