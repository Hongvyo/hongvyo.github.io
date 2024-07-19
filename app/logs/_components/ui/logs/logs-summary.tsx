import { cn } from "@/lib/utils";

export type LogsSummaryProps = {
  total: number;
};
export function LogsSummary(props: LogsSummaryProps) {
  return (
    <div className={cn("flex", "justify-between")}>
      <div>{props.total}</div>
    </div>
  );
}
