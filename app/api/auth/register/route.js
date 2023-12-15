import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request) {
  const url = request.nextUrl.clone();
  url.pathname = "/login";
  //prettier-ignore
  const { first_name, middle_name, last_name, password, email, username } = await request.json();
  try {
    // register user
    await prisma.$executeRaw`
      INSERT INTO user (first_name, middle_name, last_name, password, email, username)
      VALUES (${first_name}, ${middle_name}, ${last_name}, ${password}, ${email}, ${username})`;
    return NextResponse.redirect(url);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
