import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request) {
  const url = request.nextUrl.clone();
  url.pathname = "/explore";
  //prettier-ignore
  const { password, email } = await request.json();
  try {
    // login a user
    const user =
      await prisma.$queryRaw`SELECT user_id FROM user WHERE email = ${email} AND password = ${password}`;
    if (user.length) {
      return NextResponse.redirect(url, {
        headers: { "Set-Cookie": `user_id=${user[0].user_id};path=/` },
      });
    }
    return NextResponse.json({ success: false }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
