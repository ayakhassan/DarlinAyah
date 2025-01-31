"use client";
import { redirect } from "next/navigation";

export default function Home() {
  // Immediately send users from "/" to "/password"
  redirect("/password");
  return null;
}
