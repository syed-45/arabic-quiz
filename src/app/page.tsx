
import { IChapterData } from './types'

export default async function Home() {

  const res = await fetch('http:localhost:3000/api/get-chapter-names')
  const data = await res.json()
  const allChapters: IChapterData[] = data.result.rows

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          THIS IS TITLE!
          <code className="font-mono font-bold ml-5">src/app/page.tsx</code>
        </p>
        <div className="flex space-x-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg">
            Sign In
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg">
            Register
          </button>
        </div>
      </div>
          <ol>
            {allChapters.map((chapter) => (
              <li key={chapter.chapter_number}>{chapter.chapter_name}</li>
            ))}
          </ol>
    </main>
  )
}
