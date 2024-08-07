"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Log } from "../../_types/Log";
import Link from "next/link";
import { ListPagination, ListPaginationProps } from "./pagination";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
dayjs.extend(relativeTime);

export type LogsTableProps = {
  logs: Log["data"][];
  pagination: {
    current: number;
    total: number;
    pageSize: number;
  };
};

/**
 * 테이블 구현 문제
 * 파일이 너무 많아지면 목록 생성이 매우 힘듬.
 * 필터링 처리를 하려면 frontmatter를 써야하는데, 근본적으로 모든 파일을 읽어야함. 물론 중간에 자를 수도 있음.
 * 내용 검색을 하지 않는다고 치면, "---" 이 2번째 등장했을때까지만 read 하도록 하면 되긴함. 그럼 조금 줄어들수는 있음.
 * 페이징 처리를 생각한다면, 파일의 갯수가 많은 것은 여전히 문제가 되긴함.
 */
export function LogsTable({ logs, pagination }: LogsTableProps) {
  const [{ current, pageSize, total }, setPagination] = useState<
    Pick<ListPaginationProps, "current" | "pageSize" | "total">
  >(() => pagination);
  return (
    <Table className={cn("border-t")}>
      {/* <TableCaption>.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>title</TableHead>
          <TableHead>description</TableHead>
          <TableHead>tags</TableHead>
          <TableHead className={cn("w-[120px]")}>date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {logs
          .slice((current - 1) * pageSize, current * pageSize)
          .map(
            (
              { title, description, date, tags, url }: Log["data"],
              index: number
            ) => {
              console.log(dayjs(date));
              return (
                <Link key={index} href={url} legacyBehavior>
                  <TableRow className={cn("cursor-pointer")}>
                    <TableCell className="font-medium">{title}</TableCell>
                    <TableCell>{description}</TableCell>
                    <TableCell className={cn("space-x-1")}>
                      {tags.map((tag: string, index: number) => {
                        return <Badge key={index}>{tag}</Badge>;
                      })}
                    </TableCell>
                    <TableCell>{dayjs(date).fromNow()}</TableCell>
                  </TableRow>
                </Link>
              );
            }
          )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>
            <ListPagination
              current={current}
              total={total}
              pageSize={pageSize}
              onPageChange={(prev, curr) => {
                setPagination({
                  ...pagination,
                  current: curr,
                });
              }}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
