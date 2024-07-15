import { Categories, LogsPageLayout } from "../_components/ui/layout";
import fs from "node:fs/promises";
import path from "node:path";

export default async function ProjectsPage() {
  return (
    <LogsPageLayout
      metadata={{
        category: Categories.Projects,
      }}
    ></LogsPageLayout>
  );
}
