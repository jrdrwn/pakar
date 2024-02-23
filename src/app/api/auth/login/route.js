import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(request) {
  const url = request.nextUrl.clone();
  url.pathname = "/explore";
  //prettier-ignore
  const { password, email } = await request.json();
  const user = await prisma.user.findUnique({ where: { email, password } });
  console.log(user);
  if (!user) {
    return NextResponse.json({ success: false }, { status: 401 });
  }
  return NextResponse.redirect(url, {
    headers: { "Set-Cookie": `user_id=${user.user_id};path=/` },
  });
}
