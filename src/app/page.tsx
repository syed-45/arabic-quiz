import Link from 'next/link'
export default function Home() {
  
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div> 
          <main className="mb-10"> 
            <h1 className="text-4xl sm:text-5xl font-bold text-center">Arabic Quiz App</h1>
            <p className="text-center mt-3 text-sm">Based on Al Arabiyyah Bayna Yadayk Series</p>
          </main>
          <div className="flex flex-row gap-4 mt-8 mx-10 justify-center w-72">
            <Link href="/login"
              className="text-center dark:border-2 dark:border-gray-200 bg-gradient-to-tr from-black to-gray-600 dark:to-gray-700  text-white font-bold py-4 px-6 rounded-lg w-1/2"
              >
              Log In
            </Link>
            <Link href="/register"
              className="text-center border-2 border-gray-700 dark:border-0 bg-white text-black font-bold py-4 px-6 rounded-lg w-1/2"
            >
                Register
            </Link>
          </div> 
        </div>
    </div>
  )
}
