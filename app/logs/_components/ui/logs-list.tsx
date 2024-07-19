"use client";
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
import { Categories } from "../../_types/constants";
import { Separator } from "@/components/ui/separator";
import { ListPagination, ListPaginationProps } from "./pagination";
import { useState } from "react";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export type LogsListProps = Readonly<{
  logs: Log["data"][];
}>;

export type LogsListItemProps = Log["data"];

export function LogsListItem(props: LogsListItemProps) {
  const day = dayjs(props.date);
  //   console.log
  return (
    <div className={cn("py-1", "space-y-4")}>
      <Link passHref legacyBehavior href={props.url}>
        <button
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg p-3 text-left text-sm transition-all hover:bg-accent",
            "w-full"
          )}
        >
          <div className={cn("flex", "w-full", "justify-between")}>
            <div className={cn("text-2xl", "font-semibold")}>{props.title}</div>
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
              return (
                <Badge variant={"secondary"} key={index}>
                  {tag}
                </Badge>
              );
            })}
          </div>
        </button>
      </Link>
      <Separator />
    </div>
  );
}

export function LogsList(props: LogsListProps) {
  const { logs } = props;
  const [pagination, setPagination] = useState(() => ({
    current: 1,
    total: Math.ceil(logs.length / 20),
    pageSize: 20,
  }));
  return (
    <div className={cn("space-y-2")}>
      <LogsListSummary
        count={logs.length}
        {...pagination}
        onPageChange={(prev, curr) => {
          setPagination({
            ...pagination,
            current: curr,
          });
        }}
      />
      {logs.length > 0 ? (
        <div className={cn("space-y-2")}>
          {logs.map((metadata: Log["data"], index: number) => {
            return <LogsListItem key={index} {...metadata} />;
          })}
        </div>
      ) : (
        <div className={cn("w-full", "h-[200px]")}>No posts yet.</div>
      )}
    </div>
  );
}

export type LogsListSummaryProps = ListPaginationProps & {
  count: number;
};
export function LogsListSummary({ count, ...props }: LogsListSummaryProps) {
  return (
    <div>
      <div className={cn("flex", "justify-between", "p-2")}>
        <div className={cn("flex-none", "text-muted-foreground")}>
          found <span className={"text-foreground"}>{count}</span> logs
        </div>
        <ListPagination {...props} />
      </div>
      <Separator />
    </div>
  );
}
