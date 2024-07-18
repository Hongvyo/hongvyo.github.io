import path from "node:path";
import { Categories } from "../../_types/constants";
import { promises as fs } from "node:fs";
import matter from "gray-matter";
import { readMarkdown } from "@/lib/files";
import { LogHeader } from "./log-header";
import readingTime from "reading-time";
import { LogActions } from "./log-actions";
import { LogWriter } from "./log-writer";
import { cn } from "@/lib/utils";
import { Log, LogMetadata } from "../../_types/Log";

export type LogPageLayoutProps = {
  children?: React.ReactNode;
  category: Categories;
  slug: string;
};

export async function readFileFromSlug(
  slug: string,
  category: Categories
): Promise<Log> {
  try {
    const file = path.join(
      process.cwd(),
      "app",
      "logs",
      category,
      "logs",
      slug.replaceAll("-", ".") + ".md"
    );
    const md = await readMarkdown(file, { readContent: true });
    // console.log(data);
    return {
        content: md.
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// function parseSlug(slug: string) {
//   const splitted = slug.split("-");
//   const date = splitted.slice(-1);
//   return {
//     title: splitted.slice(0, -1).join(" "),
//     date: date,
//   };
// }

export async function LogPageLayout({
  slug,
  children,
  category,
}: LogPageLayoutProps) {
  //   const parsed = parseSlug(slug);
  //   console.log(parsed);
  const { data, content } = await readFileFromSlug(slug, category);
  const readTime = readingTime(content).time;
  return (
    <div className={cn("space-y-8")}>
      <LogHeader title={data.title} tags={data.tags} />
      <LogWriter name={"hongvyo"} date={data.date} readTime={readTime} />
      <LogActions slug={data.slug} />
    </div>
  );
}
