import { readMarkdownsFromDir } from "@/lib/files";
import { LogPageLayout } from "../../_components/ui/log-layout";
import path from "path";
import { Categories } from "../../_types/constants";

export async function generateStaticParams() {
  const markdowns = await readMarkdownsFromDir(
    path.join(process.cwd(), "app", "logs", "coding", "logs")
  );

  return markdowns.map(({ data }: any) => {
    return {
      slug: data.file.name.split(".").slice(0, -1).join("-"),
    };
  });
}

export default function CodingLogPage({
  params,
}: {
  params: { slug: string };
}) {
  return <LogPageLayout category={Categories.Coding} slug={params.slug} />;
}
