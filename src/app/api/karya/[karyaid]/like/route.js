import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

export async function PUT(request, { params }) {
  const { karyaid } = params;
  const user_id = cookies().get("user_id").value;

  const result =
    await prisma.$executeRaw`INSERT INTO likes (karya_id, user_id) VALUES (${karyaid}, ${user_id})`;

  return NextResponse.json(result);
}

export async function DELETE(request, { params }) {
  const { karyaid } = params;
  const user_id = cookies().get("user_id").value;

  const result =
    await prisma.$executeRaw`DELETE FROM likes WHERE karya_id = ${karyaid} AND user_id = ${user_id}`;

  return NextResponse.json(result);
}
