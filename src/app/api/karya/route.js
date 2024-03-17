import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request) {
  const url = request.nextUrl.clone();
  url.pathname = "/explore";
  const { title, image, about, category } = await request.json();
  const author = cookies().get("user_id").value;
  try {
    let categories = await prisma.$queryRaw`
      SELECT category_id FROM categories WHERE name = ${category}`;
    if (!categories.length) {
      await prisma.$executeRaw`INSERT INTO categories (name) VALUES (${category})`;
      categories =
        await prisma.$queryRaw`SELECT category_id FROM categories WHERE name = ${category}`;
    }
    const category_id = categories[0].category_id;

    await prisma.$executeRaw`
      INSERT INTO karya (title, image, about, category_id, author) VALUES (${title}, ${image}, ${about}, ${category_id}, ${author})`;

    return NextResponse.json({ success: true, redirect: url });
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
  const user_id = cookies().get("user_id").value;
  try {
    if (tag === "me") {
      const karya =
        await prisma.$queryRaw`CALL get_karya_by_user_id(${user_id}, -1, 0)`;
      return NextResponse.json(karya);
    } else if (tag === "" || tag === "null" || tag === "Semua") {
      const karya =
        await prisma.$queryRaw`CALL get_karya(${user_id}, ${limit}, ${offset})`;
      return NextResponse.json(karya);
    } else if (q) {
      const karya =
        await prisma.$queryRaw`CALL get_karya_by_query(${user_id}, ${q}, ${limit}, ${offset})`;
      return NextResponse.json(karya);
    } else {
      const karya =
        await prisma.$queryRaw`CALL get_karya_by_category(${user_id}, ${tag}, ${limit}, ${offset})`;
      return NextResponse.json(karya);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
