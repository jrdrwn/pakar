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
      const karya = await prisma.$queryRaw`
        SELECT karya.karya_id, title, about, price, karya.image, categories.name as category, users.user_id, username, first_name, middle_name, last_name, COUNT(likes.karya_id) as likes_count, SUM(CASE WHEN likes.user_id = ${user_id} THEN 1 ELSE 0 END) as is_user_like
        FROM karya
        JOIN users ON karya.author = users.user_id
        JOIN categories ON karya.category_id = categories.category_id
        LEFT JOIN likes ON likes.karya_id = karya.karya_id
        WHERE karya.author = ${user_id}
        GROUP BY karya.karya_id`;
      return NextResponse.json(karya);
    } else if (tag === "" || tag === "null" || tag === "Semua") {
      const karya = await prisma.$queryRaw`
        SELECT karya.karya_id, title, about, price, karya.image, categories.name as category, users.user_id, username, first_name, middle_name, last_name, COUNT(likes.karya_id) as likes_count, SUM(CASE WHEN likes.user_id = ${user_id} THEN 1 ELSE 0 END) as is_user_like
        FROM karya
        JOIN users ON karya.author = users.user_id
        JOIN categories ON karya.category_id = categories.category_id
        LEFT JOIN likes ON likes.karya_id = karya.karya_id
        GROUP BY karya.karya_id
        LIMIT ${limit} OFFSET ${offset}`;
      return NextResponse.json(karya);
    } else if (q) {
      const karya = await prisma.$queryRaw`
        SELECT karya.karya_id, title, about, price, karya.image, categories.name as category, users.user_id, username, first_name, middle_name, last_name, COUNT(likes.karya_id) as likes_count, SUM(CASE WHEN likes.user_id = ${user_id} THEN 1 ELSE 0 END) as is_user_like
        FROM karya
        JOIN users ON karya.author = users.user_id
        JOIN categories ON karya.category_id = categories.category_id
        LEFT JOIN likes ON likes.karya_id = karya.karya_id
        WHERE karya.title LIKE ${q}
        GROUP BY karya.karya_id
        LIMIT ${limit} OFFSET ${offset}`;
      return NextResponse.json(karya);
    } else {
      const karya = await prisma.$queryRaw`
        SELECT karya.karya_id, title, about, price, karya.image, categories.name as category, users.user_id, username, first_name, middle_name, last_name, COUNT(likes.karya_id) as likes_count, SUM(CASE WHEN likes.user_id = ${user_id} THEN 1 ELSE 0 END) as is_user_like
        FROM karya
        JOIN users ON karya.author = users.user_id
        JOIN categories ON karya.category_id = categories.category_id
        LEFT JOIN likes ON likes.karya_id = karya.karya_id
        WHERE categories.name = ${tag}
        GROUP BY karya.karya_id
        LIMIT ${limit} OFFSET ${offset}`;
      return NextResponse.json(karya);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
