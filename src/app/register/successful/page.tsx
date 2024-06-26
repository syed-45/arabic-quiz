import Link from "next/link";

export default function Successful() {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-2xl">
            <h1>Registration <span className="text-green-500 font-bold ">Successful</span></h1>
            <p className="text-center mt-10">You can now <Link href="/login" className="font-extrabold">Log In.</Link></p>
            
        </div>
    )
}