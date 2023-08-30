"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  const {status} = useSession
  return (
    <div>
      <button onClick={() => signIn("google")}>Login with google</button>
    </div>
  );
};

export default Login;
