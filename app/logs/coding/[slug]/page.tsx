import { loadFrontMattersFromDir } from "@/lib/files";
import { LogPageLayout } from "../../_components/ui/log-layout";
import path from "path";
import { Categories } from "../../_types/constants";

export async function generateStaticParams() {
  const files = await loadFrontMattersFromDir(
    path.join(process.cwd(), "app", "logs", "coding", "logs")
  );

  return files.map(({ data }: any) => {
    return {
      slug: data.slug,
    };
  });
}

export default function CodingLogPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params);
  return <LogPageLayout category={Categories.Coding} slug={params.slug} />;
}
