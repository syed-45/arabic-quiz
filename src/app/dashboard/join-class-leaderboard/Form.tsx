"use client";

import { JSX, useActionState, useEffect, useState } from "react";
import Modal from "@/app/Modal";
import { joinClassLeaderboardAction } from "./action";


export const Form = (): JSX.Element => {
const [res, formAction, pending] = useActionState(joinClassLeaderboardAction, {msg:"", data:null})
    const [isModalOpen, setModalIsOpen] = useState(false)
    const [modalBody, setModalBody] = useState("")
    const [modalTitle, setModalTitle] = useState("")

    useEffect(() => {
      if (res.msg==="Success") {
        setModalIsOpen(true)
        setModalTitle(`Joined class: ${res.data!.class}`)
        setModalBody(`School: ${res.data!.school}`)
      } else if (res.msg!=="") {
        setModalIsOpen(true)
        setModalTitle(res.msg)
      }
    },[res])

    return(
        <form 
            className="flex flex-col w-full max-w-md text-[14px]"     
            action={formAction}    
        >
            <label
                htmlFor="classCode"
                className="block mb-1 font-medium"
            >
                Enter your group / class code
            </label>
            <input
                id="classCode"
                name="classCode"
                type="classCode"
                defaultValue={""}
                readOnly={pending}
                placeholder=""
                autoComplete="off"
                required
                className={`${pending ? "text-black" : "text-gray-500"} bg-white w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none mb-4`}
            />
            <EnterButton pending={pending}/>
            <Modal 
                isOpen={isModalOpen}
                setIsOpen={setModalIsOpen}
                title={modalTitle}
                body={modalBody}
            />    
        </form>
    )
}


export const EnterButton = ({pending}: {pending: boolean}):JSX.Element => {
    return (
        <>
            <button 
                className={`px-4 py-1 ${pending ? 'text-gray-400 border-gray-300 dark:border-gray-600' : 'border-gray-800 dark:border-white text-black dark:text-white'} text-center rounded-md border-[1.5px] bg-transparent mr-3 w-max`}
                type="submit"
                disabled={pending}
                aria-disabled={pending}
            >
                Enter
            </button>
        </>
    )
  }