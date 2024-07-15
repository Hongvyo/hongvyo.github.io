import { Transform, Type } from "class-transformer";
import dayjs, { Dayjs } from "dayjs";

export class LogMetadata {
  title!: string;
  //   @Type(() => Date)
  @Transform(
    ({ value }) => {
      return dayjs(String(value), "YYYYMMDD");
    },
    { toClassOnly: true }
  )
  date!: Dayjs;
  @Transform(({ value }) => value.split(","))
  tags!: string[];
  description!: string;
  layout!: string;
  readTime!: number;
}

export class Log {
  content!: string;
  isEmpty: boolean = false;
  @Type(() => LogMetadata)
  data!: LogMetadata;
}
