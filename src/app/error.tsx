'use client';
 
import { useEffect } from 'react';
import Navbar from './Navbar';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <>        
      <Navbar />
      <main className="flex h-full flex-col items-center mt-40">
        <h2 className="text-center">Something went wrong!</h2>
        <button
          className="mt-4 rounded-md bg-sky-900 px-4 py-2 text-sm text-white transition-colors hover:bg-sky-700"
          onClick={
            () => reset()
          }
        >
          Try again
        </button>
      </main>
    </>
  );
}