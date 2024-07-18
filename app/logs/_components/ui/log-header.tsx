import { cn } from "@/lib/utils";

export type LogHeaderProps = {
  title: string;
  tags: string[];
};

export function LogHeader({ title, tags }: LogHeaderProps) {
  return (
    <div>
      <div>{}</div>
      <div className={cn("font-semibold", "text-4xl")}>{title}</div>;
    </div>
  );
}
