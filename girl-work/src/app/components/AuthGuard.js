// app/components/AuthGuard.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const passwordCheck = localStorage.getItem("site_unlocked");
    // If not set or false, redirect to /password
    if (passwordCheck !== "true") {
      router.push("/password");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  // While we check localStorage, don't render the protected content yet
  if (!isAuthorized) return null;

  // If authorized is true, render children
  return <>{children}</>;
}
