import { cn } from "@/lib/utils";
import { Log } from "../../_types/Log";
import { LogsList } from "./logs-list";
import path from "node:path";
import { promises as fs } from "node:fs";
import matter from "gray-matter";
import { plainToInstance } from "class-transformer";
import readingTime from "reading-time";
import { LogsTable } from "./logs-table";
import { loadFrontMattersFromDir } from "@/lib/files";

export enum Categories {
  Projects = "projects",
  Coding = "coding",
}
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

export async function LogsPageLayout<T>({
  children,
  metadata,
}: LogsPageLayoutProps) {
  const { category } = metadata;
  const files = await loadFrontMattersFromDir(
    path.join(process.cwd(), "app", "logs", category, "logs")
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
          logs={files.slice(0, 5).map((frontmatter: any ) => {
            //   const parsed: LogsMatterData = mattered
            //     .data as LogsMatterData;
            //   console.log(mattered);
            return plainToInstance(Log, {
              ...frontmatter,
              data: {
                ...frontmatter.data,
                readTime: readingTime(frontmatter.content).time,
              },
            }).data;
          })}
        />
      </div>

      <LogsTable />
      {/* <div>{children}</div> */}
    </div>
  );
}
