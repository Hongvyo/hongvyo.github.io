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
import { LogContent } from "./log-content";

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
    const dir = path.join(process.cwd(), "app", "logs", category, "logs");
    const { content, data } = await readMarkdown(
      dir,
      slug.replaceAll("-", ".") + ".md",
      { readContent: true }
    );
    // console.log(data);
    return {
      content,
      data: {
        title: data.title,
        date: data.date,
        tags: data.tags.split(","),
        description: data.description,
        layout: data.layout,
        readTime: readingTime(content).time,
        slug,
        file: data.file,
        url: `/logs/${category}//${slug}`,
      },
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function LogPageLayout({
  slug,
  children,
  category,
}: LogPageLayoutProps) {
  //   const parsed = parseSlug(slug);
  //   console.log(parsed);
  const { data, content } = await readFileFromSlug(slug, category);
  return (
    <div className={cn("space-y-12", "max-w-screen-md", "m-auto", "p-4")}>
      <LogHeader title={data.title} tags={data.tags} category={category} />
      <LogWriter name={"hongvyo"} date={data.date} readTime={data.readTime} />
      <LogActions slug={data.slug} />
      <LogContent content={content}></LogContent>
    </div>
  );
}
