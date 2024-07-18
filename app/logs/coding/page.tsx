import { LogsPageLayout } from "../_components/ui/layout";
import { Categories } from "../_types/constants";
export type LogsMatterData = {
  title: string;
  category: Categories;
  date: string;
  tags: string[];
};

export default function CodingPage() {
  return (
    <LogsPageLayout
      metadata={{
        category: Categories.Coding,
      }}
    ></LogsPageLayout>
  );
}
