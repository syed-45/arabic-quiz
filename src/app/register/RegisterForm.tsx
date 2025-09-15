'use client'

import { useActionState } from "react";
import { registerAction } from "./action";
import Link from "next/link";

export function RegisterForm({children}: {children: React.ReactNode}) {
  const [res, formAction] = useActionState(registerAction,null)
  return (
    <form
      action={formAction}
      className="text-sm"
    >
      <div>
        <label
        htmlFor="name"
        className="block mb-1 font-medium"
        >
        Name
        </label>
        <input
        id="name"
        name="name"
        type="name"
        placeholder=""
        autoComplete="name"
        required
        maxLength={64}
        defaultValue={res?.formData.name}
        className="mb-4 bg-white text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>
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
          defaultValue={res?.formData.email}
          className={`mb-4 bg-white text-black w-full px-4 py-2  ${res?.emailError ? 'border-2 border-red-500' : 'border border-gray-300'} rounded-md focus:outline-none`}
        />
        {res?.emailError && <p className="font-medium text-red-600 dark:text-red-400 text-xs">{res.emailError.errors.join('. ')}</p>}
        {res?.userEmailAlreadyExists && 
        <p className="font-medium text-red-600 dark:text-red-400 text-xs">There is already a user signed up with this email. <Link href="/login" className="font-bold text-red-800 dark:text-red-300"> Sign in</Link> instead?</p>}
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
          minLength={6}
          required
          defaultValue={res?.formData.password}
          className={`mb-6 bg-white text-black w-full px-4 py-2 ${res?.passwordError ? 'border-2 border-red-500' : 'border border-gray-300'} rounded-md focus:outline-none`}
        />
        {res?.passwordError && <p className="font-medium text-red-600 dark:text-red-400 text-xs">{res.passwordError.errors.join('. ')}</p>}        
      </div>
      {children}
    </form>
  );
}