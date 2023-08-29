import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();

  const user = await prisma.user.findFirst();

  if (user) {
    const { content } = res;
    const post = await prisma.post.create({
      data: {
        title: "Alice",
        content: content as Prisma.JsonArray,
        authorId: user?.id,
      },
    });
  } else {
    throw new Error("No user found it");
  }

  return NextResponse.json("ok");
}
