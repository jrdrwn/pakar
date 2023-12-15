import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export async function GET(request) {
  return NextResponse.json({ hello: "world" });
}
