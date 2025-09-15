'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button
      type={pending ? 'button' : 'submit'}
      aria-disabled={pending}
      className="flex justify-center items-center mb-4 w-4/5 sm:w-3/5 mx-auto py-2 px-4 bg-gradient-to-r from-gray-800 via-gray-700 to bg-gray-800 text-white rounded-md transition-colors focus:outline-none"      
    >
      {children}
      {pending && (
        <svg
          className="animate-spin ml-2 h-4 w-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      <span aria-live="polite" className="sr-only" role="status">
        {pending ? 'Loading' : 'Submit form'}
      </span>
    </button>
  );
}
