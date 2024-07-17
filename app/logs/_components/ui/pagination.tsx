"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

export type TablePaginationProps = {
  current: number;
  total: number;
  pageSize: number;
  onPageChange: (prev: number, curr: number) => void;
};

export function TablePagination(props: TablePaginationProps) {
  // const [current, setCurrent] = useState(()=>props.)
  const { current, total, pageSize, onPageChange } = props;
  const pages = Array.from({ length: 5 }, (_, i) => {
    console.log(i + current - 2);
    return i + current - 2;
  });

  return (
    <Pagination>
      <PaginationContent className={cn("justify-end", "w-full")}>
        <PaginationItem>
          <PaginationPrevious
            className={cn(
              "cursor-pointer",
              current - 1 < 1 &&
                "cursor-default text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
            )}
            onClick={() => {
              if (current - 1 > 0) {
                onPageChange(current, current - 1);
              }
            }}
          />
        </PaginationItem>
        {pages.map((pageNo: number) => {
          if (pageNo < 1 || total < pageNo - 1) {
            return (
              <PaginationItem key={pageNo}>
                <PaginationLink className={cn("hover:bg-transparent", "h-1")} />
              </PaginationItem>
            );
          }
          return (
            <PaginationItem key={pageNo}>
              <PaginationLink
                className={cn(
                  "cursor-pointer",
                  current == pageNo ? "bg-muted font-semibold" : ""
                )}
                onClick={() => {
                  onPageChange(current, pageNo);
                }}
              >
                {pageNo}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem> */}
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem>
          <PaginationNext
            className={cn(
              "cursor-pointer",
              current + 1 > total &&
                "cursor-default text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
            )}
            onClick={() => {
              if (current + 1 <= total) {
                onPageChange(current, current + 1);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
