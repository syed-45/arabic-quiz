"use client"
import { JSX, SetStateAction, use, useActionState, useEffect, useState } from "react";
import { updateUserAction } from "./action";
import { IProfileFormProps } from "@/app/utils/types";
import { gradientColors } from "@/app/utils/chapterGradientColours";
import ProfileIcon from "@/app/ProfileIcon";
import Modal from "@/app/Modal";
import { LinkIcon, ShareIcon } from "@heroicons/react/24/outline"
import Link from "next/link";

export function ProfileForm({name, email, gradientNum, school, classGroup, isRegistrant, classCode}: IProfileFormProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalBody, setModalBody] = useState("Note: If you are logged in to other devices, you will have to log out and log back in to see your updated details on those devices.")
    const [isEditable, setIsEditable] = useState(false)
    const [gradientNumState, setGradientNumState] = useState(gradientNum)
    const [res, formAction, pending] = useActionState(updateUserAction,{msg:"",data:null})

  useEffect(() => {
    if (res.msg!=="") {
      setIsModalOpen(true)
      setModalTitle("Updated details saved")
      setModalBody("Note: If you are logged in to other devices, you will have to log out and log back in to see your updated details on those devices.")
      setIsEditable(false)
    }
  }, [res])

  const shareCodeClick = ():void => {
    setIsModalOpen(true)
    setModalTitle("My class code")
    setModalBody("")
  }

    return (
      <>
        <Modal 
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          title={modalTitle}
          body={modalBody}
          code={(modalTitle === "My class code" && classCode) || undefined}
        />
        <ProfileIcon gradientNum={gradientNumState} name={res.data?.name || name}/>
        <form        
          action={formAction}
          className="flex flex-col gap-7 mt-2 w-full max-w-md text-[14px]"
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
                  defaultValue={res.data?.name || name}
                  readOnly={!isEditable}
                  name="name"
                  type="name"
                  placeholder=""
                  autoComplete="name"
                  required
                  className={`${isEditable ? "text-black" : "text-gray-500"} bg-white w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none`}
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
              defaultValue={res.data?.email ||email}
              readOnly={!isEditable}
              placeholder=""
              autoComplete="email"
              required
              className={`${isEditable ? "text-black" : "text-gray-500"} bg-white w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none`}
            />
          </div>
          <ClassDetails 
            isEditable={isEditable}
            classGroup={classGroup}
            school={school}
            isRegistrant={isRegistrant}
            shareCodeClick={shareCodeClick}
          />
          <div>
            <div 
              className="block mb-1 font-medium"
            >
              Profile Colour
            </div>
            <GradientOptions 
              gradientNumState={gradientNumState} 
              setGradientNumState={setGradientNumState} 
              disabled={!isEditable}
            />
            <input type="hidden" name="gradientNum" value={gradientNumState}></input>
          </div>
          <EditUpdateButtons 
            isEditable={isEditable}
            setIsEditable={setIsEditable}
            pending={pending}
          />
        </form>
      </>
    );
  }

const ClassDetails = ({isEditable, classGroup, school, isRegistrant, shareCodeClick}: {isEditable: boolean, classGroup: string | undefined, school: string | undefined, isRegistrant: boolean, shareCodeClick: () => void}):JSX.Element => {
  return (
    <>
        {classGroup === undefined ? 
          <LinkWhenEditableBtn 
            isEditable={isEditable}
            linkText={"Join a class"}
            href={"/dashboard/join-class-leaderboard"}
          />          
          :
        <div
          className={`${isEditable ? 'text-black dark:text-white' : 'text-gray-400'} flex flex-col items-center gap-4`}
        >
          <p>My class: <b>{classGroup}</b></p> 
          <p>My school: <b>{school}</b></p>
          <div className="flex gap-4">
            <LinkWhenEditableBtn 
              isEditable={isEditable}
              linkText={"Join different class"}
              href={"/dashboard/join-class-leaderboard"}
            />
            {isRegistrant && 
              <button 
                disabled={!isEditable}
                type="button"
                className={`px-4 py-1 ${isEditable ? 'border-gray-800 dark:border-white text-black dark:text-white' : 'text-gray-400 border-gray-300 dark:border-gray-600'} text-center rounded-md border-[1.5px] bg-transparent flex items-center gap-[5px] mx-auto w-max`}
                onClick={shareCodeClick}
              >
                  Share my code <ShareIcon className="size-4"/>
              </button> 
            }
          </div>
        </div> 
        }
    </>
  )
}

const LinkWhenEditableBtn = ({isEditable, href, linkText}: {isEditable: boolean, href: string, linkText: string}): JSX.Element => {
  return (
    isEditable ? 
    <Link 
        className={`px-4 py-1 border-gray-800 dark:border-white text-black dark:text-white text-center rounded-md border-[1.5px] bg-transparent flex items-center gap-[5px] mx-auto w-max`}
        href={href}                      
    >
        {linkText} <LinkIcon className="size-4"/>
    </Link>
    :
    <div
      className={`px-4 py-1 text-gray-400 border-gray-300 dark:border-gray-600 text-center rounded-md border-[1.5px] bg-transparent flex items-center gap-[5px] mx-auto w-max`}
    >
        {linkText} <LinkIcon className="size-4"/>
    </div>
    )
}

interface IEditUpdateButtons { 
  isEditable: boolean,
  setIsEditable: (value: SetStateAction<boolean>) => void,
  pending: boolean;
}

const EditUpdateButtons = ({isEditable, setIsEditable, pending}: IEditUpdateButtons):JSX.Element => {

  return (
    <div>      
      <button 
            className={`px-4 py-1 ${isEditable || pending ? 'text-gray-400 border-gray-300 dark:border-gray-600' : 'border-gray-800 dark:border-white text-black dark:text-white'} text-center rounded-md border-[1.5px] bg-transparent mr-3`}
            disabled={isEditable || pending}
            onClick={() => setIsEditable(prev => !prev)}
            type="button"           
        >
            Edit
        </button>
        <button 
            className={`px-4 py-1 ${!isEditable || pending ? 'text-gray-400 border-gray-300 dark:border-gray-600' : 'border-gray-800 dark:border-white text-black dark:text-white'} text-center rounded-md border-[1.5px] bg-transparent`} 
            aria-disabled={!isEditable || pending}
            disabled={!isEditable || pending}  
            type={'submit'}
        >
            Update
        </button>
    </div>
)
}

interface IGradientOptions {
  gradientNumState: number,
  setGradientNumState: (value: SetStateAction<number>) => void,
  disabled: boolean
}

const GradientOptions = ({gradientNumState, setGradientNumState, disabled}: IGradientOptions): JSX.Element => {
  return (
    <div className="rounded-sm py-2 px-2 flex justify-evenly w-full">
      {gradientColors.slice(0,11).map((gradientColor, index) => {
        return (
          <button 
            type="button"
            key={gradientColor}
            disabled={disabled}
            className={`${gradientColor} size-[22px] rounded-sm ${index === gradientNumState ? "border-2 border-gray-800 dark:border-white" : ""}`}
            onClick={() => setGradientNumState(index)}
          >
          </button>
        )})}
    </div>
  )
}
  