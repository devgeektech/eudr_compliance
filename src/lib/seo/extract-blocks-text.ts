type StrapiTextChild = {
  type: string;
  text: string;
};

type StrapiBlock = {
  type: string;
  children?: StrapiTextChild[];
};

export function extractPlainTextFromBlocks(blocks: StrapiBlock[] | undefined): string {
  if (!blocks?.length) return "";

  const parts: string[] = [];
  for (const block of blocks) {
    if (block.children) {
      for (const child of block.children) {
        if (child.text?.trim()) parts.push(child.text.trim());
      }
    }
  }

  return parts.join(" ").replace(/\s+/g, " ").trim();
}

export function truncateMetaDescription(text: string, maxLength = 160): string {
  const trimmed = text.trim();
  if (trimmed.length <= maxLength) return trimmed;

  const slice = trimmed.slice(0, maxLength);
  const lastSpace = slice.lastIndexOf(" ");
  if (lastSpace > 0) return `${slice.slice(0, lastSpace).trim()}…`;
  return `${slice.trim()}…`;
}