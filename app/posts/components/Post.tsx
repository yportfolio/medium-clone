import Bold from "@tiptap/extension-bold";
// Option 2: Browser-only (lightweight)
// import { generateHTML } from '@tiptap/core'
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { generateHTML } from "@tiptap/html";
import React, { useMemo } from "react";
import { Prisma } from "@prisma/client";
import parse from "html-react-parser";
import { JSONContent } from "@tiptap/react";

type postProps = {
  post: {
    title: string;
    content: JSONContent | Prisma.JsonValue;
    author: {
      id: number;
      email: string;
      name: string | null;
    };
  };
};

export default function Post({ post }: postProps) {
  const content = useMemo(() => {
    let htmlStr = "";
    if (post.content)
      htmlStr = generateHTML(post.content as JSONContent, [
        Document,
        Paragraph,
        Text,
        Bold,
        // other extensions …
      ]);

    return parse(htmlStr);
  }, [post.content]);

  return (
    <div>
      <h2>{post.title}</h2>
      {content}
      <span>{post.author.name}</span>
    </div>
  );
}
