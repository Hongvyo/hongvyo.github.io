import { cn } from "@/lib/utils";
import { Log, LogMetadata } from "../../_types/Log";
import { LogsList } from "./logs-list";
import path from "node:path";
import { promises as fs } from "node:fs";
import matter from "gray-matter";
import { plainToInstance, instanceToPlain } from "class-transformer";
import readingTime from "reading-time";
import { LogsTable } from "./logs-table";
import { loadFrontMattersFromDir } from "@/lib/files";
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

function parseFrontmatter(frontmatter: any): LogMetadata {
  const { data, content } = frontmatter;
  const day = dayjs(String(data.date));
  return {
    title: data.title,
    date: day.toDate(),
    layout: data.layout,
    readTime: readingTime(content).time,
    description: data.description,
    tags: data.tags.split(","),
  };
}

export async function LogsPageLayout({
  children,
  metadata,
}: LogsPageLayoutProps) {
  const { category } = metadata;
  const files = await loadFrontMattersFromDir(
    path.join(process.cwd(), "app", "logs", category, "logs"),
    { readContent: 4 }
  );
  return (
    <div className={cn("space-y-8")}>
      <div className={cn("text-3xl", "font-semibold")} id={`logs/${category}`}>
        logs/{category}
      </div>
      <div>quick links</div>
      <div>
        <div className={cn("text-2xl", "font-semibold", "mb-4")}>
          recent posts
        </div>
        <LogsList
          logs={files.slice(0, 4).map((frontmatter: any) => {
            //   const parsed: LogsMatterData = mattered
            //     .data as LogsMatterData;
            //   console.log(mattered);
            return parseFrontmatter(frontmatter);
          })}
        />
      </div>

      <LogsTable
        logs={files.map((frontmatter: any) => {
          return parseFrontmatter(frontmatter);
          //   return {
          //     title: frontmatter.title,
          //     date: frontmatter.date.fromNow(),
          //     tags: frontmatter.tags.split(","),
          //     description: frontmatter.description,
          //     readTime: 0,
          //     layout: frontmatter.layout
          //   };
        })}
        pagination={{
          current: 1,
          total: files.length / 20,
          pageSize: 20,
        }}
      />
      {/* <div>{children}</div> */}
    </div>
  );
}
