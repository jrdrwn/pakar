import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(request) {
  const count = request.nextUrl.searchParams.get("count");
  const limit = request.nextUrl.searchParams.get("limit");
  const q = request.nextUrl.searchParams.get("q");

  if (count) {
    const categories = await prisma.$queryRaw`
        SELECT categories.name as category, COUNT(categories.name) as count FROM categories
        JOIN karya ON karya.category_id = categories.category_id
        WHERE categories.name LIKE ${`%${q}%`}
        GROUP BY categories.name
        ORDER BY count DESC`;

    BigInt.prototype.toJSON = function () {
      const int = Number.parseInt(this.toString());
      return int ?? this.toString();
    };

    return NextResponse.json(
      categories
        .map((tag) => {
          return count
            ? {
                category: tag["category"],
                count: tag["count"],
              }
            : tag["category"];
        })
        .slice(0, limit),
    );
  } else if (limit) {
    const categories = await prisma.$queryRaw`
        SELECT * FROM categories
        WHERE name LIKE ${`%${q}%`}
        LIMIT ${limit}
        `;

    return NextResponse.json(categories);
  } else {
    const categories = await prisma.$queryRaw`
        SELECT * FROM categories
        WHERE name LIKE ${`%${q}%`}
        `;

    BigInt.prototype.toJSON = function () {
      const int = Number.parseInt(this.toString());
      return int ?? this.toString();
    };
    return NextResponse.json(categories);
  }
}
