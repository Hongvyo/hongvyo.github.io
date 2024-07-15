import { Categories, LogsPageLayout } from "../_components/ui/layout";
import { plainToInstance } from "class-transformer";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { Log } from "../_types/Log";
import readingTime from "reading-time";
export type LogsMatterData = {
  title: string;
  category: Categories;
  date: string;
  tags: string[];
};

export default async function CodingPage() {
  return (
    <LogsPageLayout
      metadata={{
        category: Categories.Coding,
      }}
    ></LogsPageLayout>
  );
}