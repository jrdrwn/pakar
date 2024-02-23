import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const user_id = cookies().get("user_id").value;
  const user = await prisma.$queryRaw`
    SELECT user_id, username, first_name, middle_name, last_name, email FROM user WHERE user_id = ${user_id}`;
  return NextResponse.json(user);
}

export async function PUT(req) {
  const user_id = cookies().get("user_id").value;
  const { first_name, middle_name, last_name, email, username, password } =
    await req.json();
  try {
    const response = await prisma.$executeRaw`
      UPDATE user SET first_name = ${first_name}, middle_name = ${middle_name}, last_name = ${last_name}, email = ${email}, username = ${username}, password = ${password} WHERE user_id = ${user_id}`;
    console.log(response);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
