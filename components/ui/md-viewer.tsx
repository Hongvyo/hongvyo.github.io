import markdownit from "markdown-it";
import { Token } from "markdown-it/index.js";
import { promises as fs } from "node:fs";

export type MdViewerProps = {
  src: string;
};
const md = markdownit();

export async function Markdown({ src, ...props }: MdViewerProps) {
  const file = await fs.readFile(process.cwd() + "/app/about/about.md", "utf8");
  console.log(file);
  const parsed = md.parse(file, {});

  return (
    <>
      {parsed.map((token: Token, index: number) => {
        console.log(token.type, token);
        switch (token.type) {
            case "heading_open": 
        }

        return <div key={index}>{token.content}</div>;
      })}
    </>
  );
}
