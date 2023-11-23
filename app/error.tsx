"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="font-semibold text-2xl">Something went wrong!</h1>
      <div className="flex gap-4">
        <button
          className="btn btn-primary"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
        <Link className="btn btn-neutral" href="/">
          Go home
        </Link>
      </div>
    </div>
  );
}
