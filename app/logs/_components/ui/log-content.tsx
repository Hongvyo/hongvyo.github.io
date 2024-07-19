import { Markdown } from "@/components/ui/markdown";

export type LogContentProps = {
  content: string;
};
export function LogContent({ content }: LogContentProps) {
  return <Markdown content={content}></Markdown>;
}
