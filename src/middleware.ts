import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fetchMe } from "./contexts/authFunctions";

export function middleware(request: NextRequest) {
        
    return NextResponse.next();
}

export const config = {
    matcher: ['/home/login'],
};