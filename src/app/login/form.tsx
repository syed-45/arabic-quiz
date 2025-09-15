'use client'

import { useActionState } from "react";
import { signInAction } from "./action";

export function Form({children,}: {children: React.ReactNode;}) {
  const [res, formAction] = useActionState(signInAction,null)
  return (
    <form
      action={formAction}
      className="text-sm"
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-1 font-medium"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="user@acme.com"
          autoComplete="email"
          required
          className={`mb-4 bg-white text-black w-full px-4 py-2 ${res?.invalidCredentials ? 'border-2 border-red-500' : 'border border-gray-300'} rounded-md focus:outline-none`}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-1 font-medium"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className={`mb-6 bg-white text-black w-full px-4 py-2 ${res?.invalidCredentials ? 'border-2 border-red-500' : 'border border-gray-300'} rounded-md focus:outline-none`}
        />
        {res?.invalidCredentials && <p className="text-red-600 dark:text-red-400 -mt-4 mb-2">Invalid login</p>} 
      </div>
      {children}
    </form>
  );
}
