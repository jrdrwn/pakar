import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(request) {
  const url = request.nextUrl.clone();
  url.pathname = "/login";
  //prettier-ignore
  const { first_name, middle_name, last_name, password, email, username } = await request.json();
  try {
    await prisma.users.upsert({
      create: {
        first_name,
        middle_name,
        last_name,
        password,
        email,
        username,
      },
      where: {
        email,
        username,
      },
      update: {},
    });
    return NextResponse.json({ redirect: url });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
