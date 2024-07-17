export type LogMetadata = {
  title: string;
  date: Date;
  tags: string[];
  description: string;
  layout: string;
  readTime: number;
};

export type Log = {
  content: string;
  isEmpty: boolean;
  data: LogMetadata;
};
