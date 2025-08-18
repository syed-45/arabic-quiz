import { NextResponse } from "next/server"
import { schools } from '../../db/schema';
import { db } from "@/app/db";
 
export async function GET(request: Request) {
    try {
        const result = await db.select().from(schools)
        return NextResponse.json({ result }, {status: 200})
    } catch (error) {
        console.error(error)
        return NextResponse.json({ "message": "error" }, { status: 500 });
    }
}