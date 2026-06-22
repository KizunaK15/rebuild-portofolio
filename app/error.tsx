"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="text-center max-w-md">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ color: "var(--color-error)" }}
        >
          Something went wrong
        </h1>
        <p className="mb-8" style={{ color: "var(--color-text-secondary)" }}>
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="rounded-lg px-6 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          Try again
        </button>
      </div>
    </main>
  );
}
