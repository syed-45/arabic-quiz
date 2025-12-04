"use client"
import { JSX, useEffect, useState } from 'react';
import { useTheme } from "next-themes"
import { Dialog, DialogPanel } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Switch } from '@headlessui/react'
import ProfileIcon from './ProfileIcon';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react'

export default function Navbar(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname()

  return (
    <header>
      <nav
        className='max-w-screen-lg px-5 pt-7 h-[76px] w-full flex mx-auto'
        aria-label='Global'
      >
        <button
          type='button'
          className='w-1/3 flex justify-start'
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className='sr-only'>Open main menu</span>
          <Bars3Icon className='size-10' aria-hidden='true' />
        </button>
        <div className='w-1/3 flex justify-center'>
          <Link href={'/dashboard'}>
            {pathname !== '/dashboard/profile' && 
            <>
              <Image 
                src={"/icon1.png"} alt="arabic app logo white" width={50} height={50} className="rounded-md block dark:hidden" 
              />
              <Image 
                src={"/icon2.png"} alt="arabic app logo" width={50} height={50} className="rounded-md hidden dark:block" 
              />
            </>}
          </Link>
        </div>
        {pathname==='/dashboard' &&
        <ProfileLink/>
        }
      </nav>
      <Dialog
        as='div'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            {/* <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              />
            </a> */}
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Link
                  scroll={false}
                  className='smooth-scroll -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 dark:hover:bg-gray-900 hover:bg-gray-50'
                  href='/dashboard'
                >
                  Dashboard
                </Link>
                <Link
                  scroll={false}
                  className='smooth-scroll -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 dark:hover:bg-gray-900 hover:bg-gray-50'
                  href='/dashboard/leaderboard'
                >
                  Leaderboard
                </Link>
                <Link
                  scroll={false}
                  className='smooth-scroll -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 dark:hover:bg-gray-900 hover:bg-gray-50'
                  href='/dashboard/register-class-leaderboard'
                >
                  Register a new group / class
                </Link>
                <Link
                  scroll={false}
                  className='smooth-scroll -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 dark:hover:bg-gray-900 hover:bg-gray-50'
                  href='/dashboard/profile'
                >
                  Profile
                </Link>
              </div>
            </div>
          </div>
          <DarkModeToggle/>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

const ProfileLink = () => {
  // todo: user has isRegistered TRUE when not TRUE initial login...
  const {data, status} = useSession()
  if (status==='loading') {
    return(
    <div className='w-1/3 flex justify-end'>
      <ProfileIcon
        gradientNum={0}
        name='name' // intended
        route='/dashboard'
        loading={true}
      />
    </div>
    )
  }
  if (!data?.user?.name) return <></>
  const {name, gradientNum} = data.user
  return (
    <Link href="/dashboard/profile" className='w-1/3 flex justify-end'>
      <ProfileIcon 
        gradientNum={gradientNum}
        name={name}
        route='/dashboard'
      />
    </Link>
  )
}

const DarkModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(resolvedTheme==="dark")

  useEffect(() => {
    setTheme(prev => isDarkMode === true ? "dark" : "light");
  }, [isDarkMode, setTheme])

  return (
    <div className='flex flex-grow gap-3 mt-2'>
      <SunIcon className='size-6 block dark:hidden ' />
      <MoonIcon className='size-6 hidden dark:block' />
      <Switch
        checked={isDarkMode}
        onChange={setIsDarkMode}
        className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-400 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-600"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
        />
      </Switch>
    </div>
  )
}

