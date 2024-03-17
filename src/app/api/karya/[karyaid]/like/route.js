import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

export async function PUT(request, { params }) {
  const { karyaid } = params;
  const user_id = cookies().get("user_id").value;

  const result =
    await prisma.$executeRaw`CALL like_toggle(${karyaid}, ${user_id})`;

  return NextResponse.json(result);
}
