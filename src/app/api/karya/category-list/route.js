import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(request) {
  const isLength = request.nextUrl.searchParams.get("length");
  if (isLength) {
    const test =
      await prisma.$queryRaw`SELECT main_category, COUNT(karya_id) FROM karya  GROUP BY main_category ORDER BY COUNT(karya_id) DESC`;
    BigInt.prototype.toJSON = function () {
      const int = Number.parseInt(this.toString());
      return int ?? this.toString();
    };
    return NextResponse.json(
      test
        .map((tag) => {
          return {
            main_category: tag["main_category"],
            count: tag["COUNT(karya_id)"],
          };
        })
        .slice(0, 10),
    );
  }
  const tags = await prisma.karya.findMany({
    select: {
      main_category: true,
    },
    distinct: ["main_category"],
  });

  return NextResponse.json(tags.map((tag) => tag.main_category));
}
