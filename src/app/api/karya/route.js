import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "../../../../lib/prisma";

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
  const q = request.nextUrl.searchParams.get("q");
  const tag = decodeURIComponent(request.nextUrl.searchParams.get("tag"));
  const limit = request.nextUrl.searchParams.get("limit");
  const offset = request.nextUrl.searchParams.get("offset");
  try {
    if (tag === "me") {
      const user_id = cookies().get("user_id").value;
      const karya = await prisma.$queryRaw`
        SELECT karya_id, title, about, specification, price, image, main_category, user_id, username, first_name, middle_name, last_name FROM karya
        JOIN user ON karya.author = user.user_id
        WHERE karya.author = ${user_id} limit ${limit} offset ${offset}`;
      return NextResponse.json(karya);
    } else if (
      tag === "" ||
      tag === "all" ||
      tag === "null" ||
      tag === "other" ||
      tag === "Semua"
    ) {
      const karya = await prisma.$queryRaw`
        SELECT karya_id, title, about, specification, price, image, main_category, user_id, username, first_name, middle_name, last_name FROM karya
        JOIN user ON karya.author = user.user_id limit ${limit} offset ${offset}`;
      return NextResponse.json(karya);
    } else if (q) {
      const karya = await prisma.$queryRaw`
        SELECT karya_id, title, about, specification, price, image, main_category, user_id, username, first_name, middle_name, last_name FROM karya
        JOIN user ON karya.author = user.user_id
        WHERE karya.title LIKE ${q} limit ${limit} offset ${offset}`;
      return NextResponse.json(karya);
    } else {
      const karya = await prisma.$queryRaw`
        SELECT karya_id, title, about, specification, price, image, main_category, user_id, username, first_name, middle_name, last_name FROM karya
        JOIN user ON karya.author = user.user_id
        WHERE karya.main_category = ${tag} limit ${limit} offset ${offset}`;
      return NextResponse.json(karya);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
