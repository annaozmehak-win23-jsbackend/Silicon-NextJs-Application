import { cookies } from "next/headers";
 import { NextRequest, NextResponse } from "next/server";

 export async function middleware(request: NextRequest) {
    // const cookie = cookies().get("Authorization");

    // if (!cookie) {
    //     return NextResponse.redirect(new URL("/signin", request.url))
    // }

    // try {
    //     const res = await fetch("https://accountprovider-silicon-win23-annaozmehak.azurewebsites.net/api/Verify?code=4UutIeKPTO3j3YWHF95w-xYbtiB-KNa_vjVIDYnlDlXsAzFuY4vcqQ==", {
    //         method: "POST",
    //         headers: {
    //             "Authorization": `bearer ${cookie.value}`
    //         }
    //     })                                     

    //     if (res.status === 200) {
    //         NextResponse.redirect(request.url)
    //     }
    //     else {
    //         return NextResponse.redirect(new URL("/signin", request.url))
    //     }
    // }
    // catch (error) {
    //     return NextResponse.redirect(new URL("/signin", request.url))
    // }
}

    
export const config = {
    // matcher: "/account/:path*"
}
