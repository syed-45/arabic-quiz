"use client"
import { Button, Dialog, DialogPanel, DialogTitle, DialogBackdrop, } from '@headlessui/react'
import { Dispatch, SetStateAction, Suspense, use, useState } from 'react'
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline'

interface IModalProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  title: string,
  body?: string,
  code?: string | Promise<string>, 
}

const ClipboardToCheck = ({code}: {code: string}) => {
  const [showCheck, setShowCheck] = useState(false)

  return (
    showCheck ? 
    <CheckIcon className='size-4 animate-fade-out' color='lightgreen'></CheckIcon>
    : 
    <ClipboardIcon className='size-4 cursor-pointer' 
      onClick={() => {
        navigator.clipboard.writeText(code)
        .then(() => setShowCheck(true))
        .catch((err) => {
          console.log("Error: ", err);
        })        
      }}
    />
  )
}

export default function Modal({isOpen, setIsOpen, title, body, code}: IModalProps) {

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogBackdrop className="fixed inset-0 backdrop-blur-md" />
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-gray-900/40 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                {title}
              </DialogTitle>
              <div className="mt-2 text-sm/6 text-white/90">
                {body}
                {typeof code === 'string' && body!=="" && //show when initially registering classs
                <div className='mt-2 backdrop-blur-xl px-4 py-1 rounded-md w-max mx-auto flex justify-center items-center gap-1'>
                  {code} <ClipboardToCheck code={code}/> 
                </div>} 
                {typeof code === 'object' &&  // when fetching code from profile pge
                <Suspense fallback={<div className='mt-2 backdrop-blur-xl h-8 w-32 rounded-md mx-auto animate-pulse'></div>}>
                  <Code codePromise={code} />
                </Suspense>
                }
                
              </div>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Close
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

const Code = ({codePromise}: {codePromise: Promise<string>}) => {
  const code = use(codePromise)
  return (
    <div className='mt-2 backdrop-blur-xl px-4 py-1 h-8 w-32 rounded-md mx-auto flex justify-center items-center gap-1'>
      {code} <ClipboardToCheck code={code}/>
    </div>
  )
}