import { PathLike } from "fs";

export type LogMetadata = {
  title: string;
  date: Date;
  tags: string[];
  description: string;
  layout: string;
  readTime: number;
  slug: string;
  fileName: PathLike;
};

export type Log = {
  content: string;
//   isEmpty: boolean;
  data: LogMetadata;
};
