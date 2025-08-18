"use client";

import { JSX, useActionState, useEffect, useState } from "react";
import { registerClassLeaderboardAction } from "./action";
import { ISchool } from "./page";
import Modal from "@/app/Modal";


export const Form = ({listOfSchools}: {listOfSchools: ISchool[]}): JSX.Element => {
    const [code, formAction, pending] = useActionState(registerClassLeaderboardAction, null);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState("New class registered successfully")
    const [modalBody, setModalBody] = useState("Share the following code for others to join your class leaderboard")
    
    useEffect(() => {
        if (code === 'This school is already present on the list' || code === 'This class has already been created') {
            setModalBody("")
            setModalTitle(code)
            setIsModalOpen(true)
        }
        else if (code!==null) {
            setIsModalOpen(true)
        }
    },[code])

    return(
        <form 
            className="flex flex-col w-full text-[14px] mt-10 font-medium"
            action={formAction}
        >                
            <SelectForm listOfSchools={listOfSchools} />
            <label
                htmlFor="groupClassName"
                className="block mb-1 mt-8"
            >
                Group / class name
            </label>
            <input
                id="groupClassName"
                name="groupClassName"         
                autoComplete="off"
                required
                className="rounded-md mb-8 bg-white w-full px-4 py-3 border border-gray-300  focus:outline-none text-black" 
            >
            </input>
            <SubmitButton pending={pending} />
            <Modal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                title={modalTitle}
                body={modalBody}
                code={code || undefined}
            />   
        </form>
    )
}

const SelectForm = ({listOfSchools}: {listOfSchools: ISchool[]}):JSX.Element => {    
    const [selectValue, setSelectValue] = useState("")

    return(
        <>
            <label
                htmlFor="schoolSelect"
                className="block mb-1"
            >
                School
            </label>
            <select 
                id="schoolSelect"
                name="schoolSelect"         
                autoComplete="off"
                required
                className={`rounded-md text-center w-full px-4 py-3 border border-gray-300  focus:outline-none text-black ${selectValue === "Register a new school" ? "bg-yellow-200" : "bg-white"}`}
                onChange={(e) => setSelectValue(e.target.value)}
                value={selectValue}
            >
                <option value="">--Please select a school--</option>
                {listOfSchools.map((school) => <option value={school.name} key={school.name}>{school.name}</option>)}
                <option value={"Register a new school"} className="bg-yellow-200">Register a new school</option>
            </select>   
            {selectValue==="Register a new school" 
                && 
            <>
                <label
                    htmlFor="newSchoolName"
                    className="block mb-1 mt-8"
                >
                    School name
                </label>
                <input
                    id="newSchoolName"
                    name="newSchoolName"         
                    autoComplete="off"
                    required
                    className="rounded-md bg-white w-full px-4 py-3 border border-gray-300  focus:outline-none text-black"                 
                >
                </input>
            </>}
        </>
    )
}


const SubmitButton = ({pending}: {pending: boolean}):JSX.Element => {
    
    return (
        <> 
            <button 
                className={`px-4 py-1 ${pending ? 'text-gray-400 border-gray-300 dark:border-gray-600' : 'border-gray-800 dark:border-white text-black dark:text-white'} text-center rounded-md border-[1.5px] bg-transparent mr-3 w-max`}
                type="submit"
                disabled={pending}
                aria-disabled={pending}
            >
              Submit
            </button>
        </>
    )
  }