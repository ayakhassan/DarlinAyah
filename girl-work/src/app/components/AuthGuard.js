"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }) {
  const [isUnlocked, setIsUnlocked] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unlocked = localStorage.getItem("site_unlocked");
    if (unlocked !== "true") {
      // If not unlocked, go back to /password
      router.push("/password");
    } else {
      setIsUnlocked(true);
    }
  }, [router]);

  // While checking localStorage, render nothing (or a loader)
  if (!isUnlocked) return null;

  // If unlocked, render the protected content
  return <>{children}</>;
}
