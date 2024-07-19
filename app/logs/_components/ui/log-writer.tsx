import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import Image from "next/image";

export type LogWriterProps = {
  readTime: number;
  date: Date;
  name: string;
};

export function LogWriter({ name, date, readTime }: LogWriterProps) {
  return (
    <div className={cn("flex", "space-x-4")}>
      <div className={cn("relative", "h-12", "w-12")}>
        <Image
          draggable={false}
          //   height={64}
          //   width={64}
          className={cn("rounded-full")}
          src="/profile.jpg"
          alt="me!"
          layout={"fill"}
          objectFit="cover"
          // fill={true}
        />
      </div>
      <div>
        <div>{name}</div>
        <div
          className={cn(
            "flex",
            "text-sm",
            "space-x-2",
            "text-muted-foreground"
          )}
        >
          <div>{Math.ceil(readTime / 6000)} min read</div>
          <div>{dayjs(date).fromNow()}</div>
        </div>
      </div>
    </div>
  );
}
