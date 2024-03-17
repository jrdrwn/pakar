import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(request, { params }) {
  const { karyaid } = params;
  const user_id = cookies().get("user_id").value;
  try {
    const karya = await prisma.$queryRaw`CALL get_karya_by_id(${karyaid}) `;

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
