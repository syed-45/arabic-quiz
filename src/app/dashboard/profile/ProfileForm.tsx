"use client"
import { JSX, SetStateAction, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { updateUserAction } from "./action";
import { IProfileFormProps } from "@/app/utils/types";
import { gradientColors } from "@/app/utils/chapterGradientColours";
import ProfileIcon from "@/app/ProfileIcon";
import Modal from "@/app/Modal";
import { LinkIcon } from "@heroicons/react/24/outline"
import Link from "next/link";

export function ProfileForm({name, email, gradientNum, school, classGroup}: IProfileFormProps) {
    const [isEditable, setIsEditable] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [gradientNumState, setGradientNumState] = useState(gradientNum)

    return (
      <>
        <ProfileIcon gradientNum={gradientNumState} name={name}/>
        <form        
          action={updateUserAction.bind(null, gradientNumState.toString())}
          onSubmit={() => {
            setIsEditable(prev => !prev)
            setSubmitted(true)
          }}
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
                  defaultValue={name}
                  readOnly={!isEditable}
                  name="name"
                  type="name"
                  placeholder=""
                  autoComplete="name" //TODO: change to on or off
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
              defaultValue={email}
              readOnly={!isEditable}
              placeholder=""
              autoComplete="email" //TODO: change to on or off
              required
              className={`${isEditable ? "text-black" : "text-gray-500"} bg-white w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none`}
            />
          </div>
          <ClassDetails 
            isEditable={isEditable}
            classGroup={classGroup}
            school={school}
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
          </div>
          <EditUpdateButtons 
            isEditable={isEditable}
            setIsEditable={setIsEditable}
            submitted={submitted}
            setSubmitted={setSubmitted}
          />
        </form>
      </>
    );
  }

const ClassDetails = ({isEditable, classGroup, school}: {isEditable: boolean, classGroup: string | undefined, school: string | undefined}):JSX.Element => {
  return (
    <>
        {classGroup === undefined ? 
          <LinkWhenEditableBtn 
            isEditable={isEditable}
            linkText={"Join a Class"}
            href={"/dashboard/join-class-leaderboard"}
          />          
          :
        <div
          className={`${isEditable ? 'text-black dark:text-white' : 'text-gray-400'} flex flex-col items-center gap-4`}
        >
          <p>My class: <b>{classGroup}</b></p> 
          <p>My school: <b>{school}</b></p>
          <div className="flex gap-3">
            <LinkWhenEditableBtn 
              isEditable={isEditable}
              linkText={"Change Class"}
              href={"/dashboard/join-class-leaderboard"}
            />
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
        className={`px-4 py-1 ${isEditable ? 'border-gray-800 dark:border-white text-black dark:text-white' : 'text-gray-400 border-gray-300 dark:border-gray-600'} text-center rounded-md border-[1.5px] bg-transparent flex items-center gap-[5px] mx-auto w-max`}
        href={href}                      
    >
        {linkText} <LinkIcon className="size-4"/>
    </Link>
    :
    <div
      className={`px-4 py-1 ${isEditable ? 'border-gray-800 dark:border-white text-black dark:text-white' : 'text-gray-400 border-gray-300 dark:border-gray-600'} text-center rounded-md border-[1.5px] bg-transparent flex items-center gap-[5px] mx-auto w-max`}
    >
        {linkText} <LinkIcon className="size-4"/>
    </div>
    )
}

interface IEditUpdateButtons { 
  isEditable: boolean,
  setIsEditable: (value: SetStateAction<boolean>) => void,
  submitted: boolean,
  setSubmitted: (value: SetStateAction<boolean>) => void 
}

const EditUpdateButtons = ({isEditable, setIsEditable, setSubmitted}: IEditUpdateButtons):JSX.Element => {
  const { pending } = useFormStatus();
  const [isModalOpen, setModalIsOpen] = useState(false)

  /**
   * editable = false
   * user clicks edit => editable = true
   * user clicks update => editable = false and pending = true...
   * form finishes POST so pending = false => repeat...
   * PSUEDOCODE above helped clear thinking alhamdulillah
   * 
   * 
   * init => pending = false
   * form submitted => pending = true, submit = true
   * no error in action & pending = false => trigger succes modal, submit = false
   */

  useEffect(() => {
    setSubmitted((prev) => {
      if (prev && !pending) {
        setModalIsOpen(true)
      }
      else if (pending) return true
      return false
    })
  }, [pending, setSubmitted])


  return (
    <div>
      <Modal 
        isOpen={isModalOpen}
        setIsOpen={setModalIsOpen}
        title="Updated details saved"
        body="Note: If you are logged in to other devices, you will have to log out and log back in to see updated data on those devices."
      />
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
  