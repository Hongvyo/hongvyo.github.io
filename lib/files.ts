import fs, { promises as fsPromises, PathLike, read } from "fs";
import matter from "gray-matter";
import path from "path";
import readline from "readline";
import * as Rx from "rxjs";

export async function readMarkdownFromDir(
  dir: PathLike,
  options?: { readContent: boolean | number }
) {
  const { readContent } = options || {
    readContent: false,
  };
  const files = await fsPromises.readdir(dir);
  const stream = Rx.from(files).pipe(
    Rx.mergeMap(async (fileName: string, index: number) => {
      const filePath = path.join(dir.toString(), fileName);
      const content: string = await readMarkdown(filePath, {
        readContent:
          typeof readContent == "boolean" ? readContent : index < readContent,
      });
      const matterParsed = matter(content);
      return {
        ...matterParsed,
        data: {
          ...matterParsed.data,
          fileName: filePath,
          slug: fileName.split(".").slice(0, -1).join("-"),
        },
      };
    }, 1),
    Rx.toArray()
  );
  return await Rx.lastValueFrom(stream);
}

export async function 

export async function readMarkdown(
  file: PathLike,
  { readContent }: { readContent: boolean }
): Promise<string> {
  const readable = fs.createReadStream(file);
  try {
    const reader = readline.createInterface({ input: readable });
    let frontmatterElimFound = 0;
    const lines: string = await new Promise((resolve) => {
      const lines: string[] = [];
      reader.on("line", (line) => {
        lines.push(line);
        if (!readContent) {
          if (line.includes("---")) {
            frontmatterElimFound++;
          }
          if (frontmatterElimFound > 1) {
            reader.close();
          }
        }
        // if (reader.terminal)
      });
      reader.on("close", () => {
        resolve(lines.join("\n"));
      });
    });
    console.log(lines);
    return lines;
  } catch (e) {
    throw e;
  } finally {
    readable.close();
  }
}
