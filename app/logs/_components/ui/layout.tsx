import { cn } from "@/lib/utils";
import { Log, LogMetadata } from "../../_types/Log";
import { LogsList } from "./logs-list";
import path from "node:path";
import { promises as fs } from "node:fs";
import matter from "gray-matter";
import { plainToInstance, instanceToPlain } from "class-transformer";
import readingTime from "reading-time";
import { LogsTable } from "./logs-table";
import { readMarkdownsFromDir } from "@/lib/files";
import dayjs from "dayjs";
import { Categories } from "../../_types/constants";

// export type LogsPageParams = {
//   recent: Log["data"][];
// };
export type LogsPageMetadata = {
  category: Categories;
};

export type LogsPageLayoutProps = Readonly<{
  metadata: LogsPageMetadata;
  children?: React.ReactNode;
  //   params: LogsPageParams;
}>;

function createLogMetadata(
  frontmatter: any,
  category: Categories
): LogMetadata {
  const { data, content } = frontmatter;
  const day = dayjs(String(data.date));
  const slug = data.file.name.split(".").slice(0, -1).join("-");
  return {
    title: data.title,
    date: day.toDate(),
    layout: data.layout,
    readTime: readingTime(content).time,
    description: data.description,
    tags: data.tags.split(","),
    file: data.file,
    slug,
    url: `/logs/${category}/${slug}`,
  };
}

export async function LogsPageLayout({
  children,
  metadata,
}: LogsPageLayoutProps) {
  const { category } = metadata;
  const files = await readMarkdownsFromDir(
    path.join(process.cwd(), "app", "logs", category, "logs"),
    { readContent: 4 }
  );
  return (
    <div className={cn("space-y-12", "max-w-screen-md", "m-auto")}>
      <div
        className={cn(
          "text-muted-foreground",
          "text-4xl",
          "font-semibold",
          "mb-4"
        )}
      >
        list of logs/<span className={cn("text-foreground")}>{category}</span>
      </div>
      <LogsList
        logs={files.map((frontmatter: any) => {
          //   const parsed: LogsMatterData = mattered
          //     .data as LogsMatterData;
          //   console.log(mattered);
          return createLogMetadata(frontmatter, category);
        })}
      />
    </div>
  );
}
