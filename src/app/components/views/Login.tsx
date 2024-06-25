"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      <div className="w-full pt-8 text-center">
        <button type="button" onClick={()=>signIn('google')}>
          Login Button
        </button>
      </div>
    </>
  );
}
