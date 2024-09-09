export function RegisterForm({
  action,
  children,
}: {
  action: any;
  children: React.ReactNode;
}) {
  return (
    <form
      action={action}
      className="space-y-4"
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
        className="bg-white text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
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
          className="bg-white text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
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
          className="bg-white text-black w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>
      {children}
    </form>
  );
}
