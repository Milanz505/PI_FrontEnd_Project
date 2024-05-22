import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fetchMe } from "./contexts/authFunctions";

export function middleware(request: NextRequest) {
    //puxar mais dados nos cookies (tempo de expiração e role(ex:"admin"))
    return NextResponse.next();
}

export const config = {
    matcher: ['/home/login'],
};