import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(req) {
  const user_id = cookies().get("user_id").value;
  const user = await prisma.users.findUnique({
    select: {
      user_id: true,
      username: true,
      first_name: true,
      middle_name: true,
      last_name: true,
      email: true,
      image: true,
    },
    where: {
      user_id: parseInt(user_id),
    },
  });
  return NextResponse.json(user);
}

export async function PUT(req) {
  const user_id = cookies().get("user_id").value;
  const {
    first_name,
    middle_name,
    last_name,
    email,
    username,
    password,
    image,
  } = await req.json();
  try {
    const response = await prisma.users.update({
      where: {
        user_id: parseInt(user_id),
      },
      data: {
        first_name,
        middle_name,
        last_name,
        email,
        username,
        password,
        image,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
