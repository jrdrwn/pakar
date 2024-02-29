import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(request, { params }) {
  const { karyaid } = params;
  const user_id = cookies().get("user_id").value;
  try {
    BigInt.prototype.toJSON = function () {
      const int = Number.parseInt(this.toString());
      return int ?? this.toString();
    };
    const karya = await prisma.$queryRaw`
      SELECT karya.karya_id, title, about, price, karya.image, categories.name as category, users.user_id, username, first_name, middle_name, last_name, COUNT(likes.karya_id) as likes_count, SUM(CASE WHEN likes.user_id = ${user_id} THEN 1 ELSE 0 END) as is_user_like
        FROM karya
        JOIN users ON karya.author = users.user_id
        JOIN categories ON karya.category_id = categories.category_id
        LEFT JOIN likes ON likes.karya_id = karya.karya_id
        WHERE karya.karya_id = ${karyaid}
        GROUP BY karya.karya_id
        `;

    return NextResponse.json(karya);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
export async function PUT(request, { params }) {
  const { karyaid } = params;
  const { title, cover, description, tag } = await request.json();
  try {
    const response = await prisma.$executeRaw`
      UPDATE karya SET title = ${title}, cover = ${cover}, description = ${description}, tag = ${tag} WHERE karya_id = ${karyaid}`;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  const { karyaid } = params;
  try {
    const response = await prisma.$executeRaw`
      DELETE FROM karya WHERE karya_id = ${karyaid}`;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
