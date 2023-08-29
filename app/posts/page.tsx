import React from "react";
import { prisma } from "../../lib/prisma";
import Post from "./components/Post";

export default async function Page() {
  const posts = await prisma.post.findMany({ include: { author: true } });
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
