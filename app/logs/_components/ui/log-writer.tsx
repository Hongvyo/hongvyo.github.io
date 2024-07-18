import { cn } from "@/lib/utils";
import dayjs from "dayjs";

export type LogWriterProps = {
  readTime: number;
  date: Date;
  name: string;
};

export function LogWriter({ name, date, readTime }: LogWriterProps) {
  return (
    <div className={cn("flex", "space-x-4")}>
      <div className={cn("bg-muted", "h-12", "aspect-square")}>pic</div>
      <div>
        <div>{name}</div>
        <div
          className={cn(
            "flex",
            "text-sm",
            "space-x-2",
            "text-muted-foreground"
          )}
        >
          <div>{Math.ceil(readTime / 6000)} min read</div>
          <div>{dayjs(date).fromNow()}</div>
        </div>
      </div>
    </div>
  );
}
