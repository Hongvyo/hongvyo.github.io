import { PathLike } from "fs";

export type LogMetadata = {
  title: string;
  date: Date;
  tags: string[];
  description: string;
  layout: string;
  readTime: number;
  slug: string;
  file: {
    name: string;
    dir: PathLike;
  };
  url: string;
};

export type Log = {
  content: string;
  //   isEmpty: boolean;
  data: LogMetadata;
};
