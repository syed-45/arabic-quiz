"use client"
import { Button, Dialog, DialogPanel, DialogTitle, DialogBackdrop, } from '@headlessui/react'
import { Dispatch, SetStateAction, useState } from 'react'
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline'

interface IModalProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  title: string,
  body?: string,
  code?: string,
}

const copyToClipboard = (code: string): void => {
  navigator.clipboard.writeText(code).then(
    () => {
      // code copied to clipboard
    },
    (err) => {
      console.log("Error: ", err);
    }
  );
}

const ClipboardToCheck = ({code}: {code: string}) => {
  const [showCheck, setShowCheck] = useState(false)
  return (
    showCheck ? 
    <CheckIcon className='size-5 animate-fade-out' color='lightgreen'></CheckIcon>
    : 
    <ClipboardIcon className='size-4 cursor-pointer' 
      onClick={() => {
        copyToClipboard(code)
        setShowCheck(true)
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
              <p className="mt-2 text-sm/6 text-white/90">
                {body}
                {code!==undefined && body!=="" && <p className='mt-2 backdrop-blur-xl px-4 py-1 rounded-md w-max mx-auto flex justify-center items-center gap-1'>{code} <ClipboardToCheck code={code}/> </p>}
              </p>
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
