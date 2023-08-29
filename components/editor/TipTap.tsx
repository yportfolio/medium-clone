"use client";

import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type TipTapProps = {
  content: JSONContent | undefined;
  handleSetContent: (content: JSONContent) => void;
};
const TipTap = ({ content, handleSetContent }: TipTapProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate({ editor }) {
      // The content has changed.
      handleSetContent(editor.getJSON());
    },
  });

  return <EditorContent editor={editor} />;
};

export default TipTap;
