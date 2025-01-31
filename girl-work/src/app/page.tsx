"use client";

import { redirect } from "next/navigation";

export default function Home() {
  // Whenever someone visits "/", redirect them to "/password"
  redirect("/password");
  // Return null because nothing is rendered on this page
  return null;
}
