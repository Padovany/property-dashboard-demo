"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // In a real auth flow, I would handle errors in this function, and update global state to store the logged in user
  async function login() {
    await supabase.auth.signInWithPassword({ email, password });
    window.location.href = "/dashboard";
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="space-y-4">
        <input className="border p-2 w-full" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="border p-2 w-full" placeholder="Password" type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 p-2 text-white w-full" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
}
