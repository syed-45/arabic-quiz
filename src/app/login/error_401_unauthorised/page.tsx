import Link from "next/link";

export default function Error_401_Unauthorised() {
    return (
        <div className="flex h-screen">
            <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-center">
                {/* <h1 className="text-xl sm:text-3xl"> ERROR 401 </h1> */}
                <h2 className="text-lg sm:text-2xl">Invalid Login. Please try again.</h2>
                <Link href="/login" className="text-xl underline">Sign In</Link>
            </div>
        </div>
    );
}