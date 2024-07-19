import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Categories } from "../../_types/constants";
import { Separator } from "@/components/ui/separator";

export type LogHeaderProps = {
  title: string;
  tags: string[];
  category: Categories;
};

export function LogHeader({ title, tags, category }: LogHeaderProps) {
  return (
    <div >
      <div className={cn("text-muted-foreground", "mb-12")}>
        from logs/<span className={cn("text-foreground")}>{category}</span>
      </div>
      <div className={cn("font-semibold", "text-4xl", "mb-2")}>{title}</div>
      <div className={cn("space-x-1")}>
        {tags.map((tag: string, index: number) => {
          return (
            <Badge key={index} variant={"secondary"}>
              {tag}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
