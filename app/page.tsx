"use client";

import TipTap from "../components/editor/TipTap";
import { useState } from "react";
import { JSONContent } from "@tiptap/react";

export default function Home() {
  const [content, setContent] = useState<JSONContent>();

  const handleOnSave = async () => {
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleSetContent = (content: JSONContent) => {
    setContent(content);
  };

  return (
    <main>
      <button onClick={handleOnSave}>save the content</button>
      <TipTap content={content} handleSetContent={handleSetContent} />
    </main>
  );
}
