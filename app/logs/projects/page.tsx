import { LogsPageLayout } from "../_components/ui/layout";
import fs from "node:fs/promises";
import path from "node:path";
import { Categories } from "../_types/constants";

export default async function ProjectsPage() {
  return (
    <LogsPageLayout
      metadata={{
        category: Categories.Projects,
      }}
    ></LogsPageLayout>
  );
}
