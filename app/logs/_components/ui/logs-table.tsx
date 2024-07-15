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


/**
 * 테이블 구현 문제
 * 파일이 너무 많아지면 목록 생성이 매우 힘듬.
 * 필터링 처리를 하려면 frontmatter를 써야하는데, 근본적으로 모든 파일을 읽어야함. 물론 중간에 자를 수도 있음.
 * 내용 검색을 하지 않는다고 치면, "---" 이 2번째 등장했을때까지만 read 하도록 하면 되긴함. 그럼 조금 줄어들수는 있음.
 * 페이징 처리를 생각한다면, 파일의 갯수가 많은 것은 여전히 문제가 되긴함. 
*/
export function LogsTable() {
  return (
    <>
      <Table className={cn("border")}>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      TAble
    </>
  );
}
