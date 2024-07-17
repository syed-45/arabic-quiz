import Link from "next/link";

export default function Error_409() {
    return (
        <div className="flex h-screen">
            <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-center">
                {/* <h1 className="text-xl sm:text-3xl"> ERROR 409 </h1> */}
                <h1 className="text-lg sm:text-2xl">There is already a user registered with this email, please try a different email.</h1>
                <Link href="/register" className="text-xl underline">Register</Link>
            </div>
        </div>
    );
}