import dayjs from "dayjs";
import fs, { promises as fsPromises, PathLike, read } from "fs";
import matter from "gray-matter";
import path from "path";
import readline from "readline";
import * as Rx from "rxjs";

export async function readMarkdownsFromDir(
  dir: PathLike,
  options?: { readContent: boolean | number }
): Promise<matter.GrayMatterFile<string>[]> {
  const { readContent } = options || {
    readContent: false,
  };
  const files = await fsPromises.readdir(dir);
  const stream = Rx.from(files).pipe(
    Rx.mergeMap(async (fileName: string, index: number) => {
      const data: matter.GrayMatterFile<string> = await readMarkdown(
        dir,
        fileName,
        {
          readContent:
            typeof readContent == "boolean" ? readContent : index < readContent,
        }
      );
      return data;
    }, 1),
    Rx.toArray()
  );
  return await Rx.lastValueFrom(stream);
}

export async function readMarkdown(
  dir: PathLike,
  fileName: string,
  { readContent }: { readContent: boolean }
): Promise<matter.GrayMatterFile<string>> {
  const filePath = path.join(dir.toString(), fileName);
  const readable = fs.createReadStream(filePath);
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
    const parsed = matter(lines);
    return {
      ...parsed,
      data: {
        ...parsed.data,
        date: dayjs(String(parsed.data.date)).toDate(),
        file: {
          name: fileName,
          dir: dir,
        },
      },
    };
  } catch (e) {
    throw e;
  } finally {
    readable.close();
  }
}
