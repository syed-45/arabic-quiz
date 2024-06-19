import Link from "next/link";

export default function Error401() {
    return (
        <div className="flex h-screen bg-black">
            <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
                <h1 className="text-2xl">401 | There is already a user registered with this email, please try a different email.</h1>
                <Link href="/register" className="text-xl underline">Register</Link>
            </div>
        </div>
    );
}