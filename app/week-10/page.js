"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center text-center">
      {!user ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
          <button
            onClick={gitHubSignIn}
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            Sign In with GitHub
          </button>
        </>
      ) : (
        <>
          <h2 className="text-2xl mb-2">
            Hello, {user.displayName} ({user.email})
          </h2>
          <Link
            href="/week-10/shopping-list"
            className="text-blue-600 underline"
          >
            Go to Shopping List
          </Link>
          <button
            onClick={firebaseSignOut}
            className="mt-4 text-black bg-gray-200 px-3 py-1 rounded-md"
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  );
}
