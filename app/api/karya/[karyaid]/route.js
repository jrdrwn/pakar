import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { karyaid } = params;
  try {
    const karya = await prisma.$queryRaw`
      SELECT karya_id, title, description, date, cover, tag, user_id, username, first_name, middle_name, last_name FROM karya
      JOIN user ON karya.author = user.user_id
      WHERE karya_id = ${karyaid}`;
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
    console.log(response);
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
    console.log(response);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
