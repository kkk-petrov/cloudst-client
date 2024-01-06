
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  // const session = await getSession()
  // const pathname = request.nextUrl.pathname;
  // const isPathCorrect = pathname.startsWith("/auth") || pathname.startsWith("/api");
  // console.log(pathname)
  //
  // console.log(!session && !isPathCorrect)
  // if (!isPathCorrect && !session) {
  //   return NextResponse.redirect(process.env.LOCAL_URL + '/api/auth/signin');
  // }
}
//
// export const config = {
//   matcher: ["/:path*"]
// }

