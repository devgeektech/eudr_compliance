import React from "react";

 export type Block = {
  type: string;
  children?: {
    type: string;
    text: string;
    bold?: boolean;
  }[];
};

export function renderBlocks(blocks: Block[]) {
  if (!blocks) return null;

  return blocks.map((block, i) => {
    if (block.type === "paragraph") {
      return (
        <p key={i} className="mb-4 text-white leading-7">
          {block.children?.map((child, j) => (
            <span
              key={j}
              className={child.bold ? "font-semibold" : ""}
            >
              {child.text}
            </span>
          ))}
        </p>
      );
    }

    return null;
  });
}