"use client";

import Link from "next/link";
import React, { useState } from "react";
export function LoginForm() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const handleLogin = () => {
    console.log(name);
    console.log(pass);
  };
  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <form className="box-border flex gap-4 flex-col h-full w-1/3 justify-center items-center">
          <input
            type="text"
            placeholder="username"
            className="bg-transparent border-solid border-white border-b w-5/6"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="password"
            className="bg-transparent border-solid border-white border-b w-5/6"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button
            type="submit"
            className="py-1 w-1/2 box-border bg-white text-black rounded-xl"
            onClick={handleLogin}
          >
            Login
          </button>
          <Link href={"/signup"}>or create an account</Link>
        </form>
      </div>
    </>
  );
}
