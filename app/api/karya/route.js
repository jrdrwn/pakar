import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "../../../lib/prisma";

export async function POST(request) {
  const url = request.nextUrl.clone();
  url.pathname = "/explore";
  const { title, cover, description, tag } = await request.json();
  const author = cookies().get("user_id").value;
  try {
    const response = await prisma.$executeRaw`
      INSERT INTO karya (title, cover, description, tag, author) VALUES (${title}, ${cover}, ${description}, ${tag}, ${author})`;
    console.log(response);
    return NextResponse.redirect(url);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function GET(request) {
  const tag = request.nextUrl.searchParams.get("tag");
  try {
    if (tag === "me") {
      const user_id = cookies().get("user_id").value;
      const karya = await prisma.$queryRaw`
        SELECT karya_id, title, description, date, cover, tag, user_id, username, first_name, middle_name, last_name FROM karya
        JOIN user ON karya.author = user.user_id
        WHERE karya.author = ${user_id}`;
      return NextResponse.json(karya);
    } else if (
      tag === "" ||
      tag === "all" ||
      tag === "null" ||
      tag === "other"
    ) {
      const karya = await prisma.$queryRaw`
        SELECT karya_id, title, description, date, cover, tag, user_id, username, first_name, middle_name, last_name FROM karya
        JOIN user ON karya.author = user.user_id`;
      return NextResponse.json(karya);
    } else {
      const karya = await prisma.$queryRaw`
        SELECT karya_id, title, description, date, cover, tag, user_id, username, first_name, middle_name, last_name FROM karya
        JOIN user ON karya.author = user.user_id
        WHERE karya.tag = ${tag}`;
      return NextResponse.json(karya);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
