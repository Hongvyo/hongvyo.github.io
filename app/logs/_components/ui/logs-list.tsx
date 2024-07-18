import { cn } from "@/lib/utils";
import { Log } from "../../_types/Log";
import dayjs from "dayjs";
import Link from "next/link";
import { Badge, badgeVariants } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type LogsListProps = Readonly<{
  logs: Log["data"][];
}>;

export type LogsListItemProps = Log["data"];

export function LogsListItem(props: LogsListItemProps) {
  const day = dayjs(props.date);
  return (
    <Link passHref legacyBehavior href={props.slug}>
      <button
        className={cn(
          "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
        )}
      >
        <div className={cn("flex", "w-full", "justify-between")}>
          <div className={cn("font-semibold")}>{props.title}</div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className={cn("text-muted-foreground")}>
                {day.fromNow()}
              </TooltipTrigger>
              <TooltipContent>{day.format("YYYY-MM-DD")}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className={cn("w-full", "text-muted-foreground", "h-12")}>
          {props.description}
        </div>
        <div className={cn("flex", "space-x-1")}>
          {props.tags.map((tag: string, index: number) => {
            return <Badge key={index}>{tag}</Badge>;
          })}
        </div>
      </button>
    </Link>
  );
}

export function LogsList(props: LogsListProps) {
  const { logs } = props;
  return (
    <>
      {logs.length > 0 ? (
        <div className={cn("grid", "grid-cols-2", "gap-2")}>
          {logs.map((metadata: Log["data"], index: number) => {
            return <LogsListItem key={index} {...metadata} />;
          })}
        </div>
      ) : (
        <div className={cn("w-full", "h-[200px]")}>No posts yet.</div>
      )}
    </>
  );
}
