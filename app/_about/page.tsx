import { cn } from "@/lib/utils";
import { useMDXComponents } from "@/mdx-components";
import clsx from "clsx";
import { promises as fs } from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";

export default async function About() {
  //   const file = await fs.readFile(
  //     process.cwd() + "/app/about/about.mdx",
  //     "utf8"
  //   );

  return (
    <div className={cn("space-y-4")}>
      <h1 className={cn("text-4xl", "font-bold")}>about me</h1>
      <div className={cn("flex", "justify-between", "py-4")}>
        <div className={cn("space-y-4")}>
          <div className={cn("text-xl", "font-semibold")}>Hi! I'm Ji Hoon.</div>
          <div>
            You can call me 'Hongvyo' as it is my preferred handle/tag on the
            web.
            <br /> I've been working as a software engineer since 2019. Mostly
            as a backend engineer. <br />
            Although I was not a CS major, I have managed to work for one of the
            best startups in South Korea - Zigbang.
          </div>
          {/* <div className={cn("text-xl")}>I love to create!</div> */}
          <div>
            I love to create! My creativity usually starts with a hobby.
            <br />
            I get too obsessed with it, I just have to create
            something from it.
            <br /> That's why I launched my very first side project -
            Thirteenth,
            <br /> which is an web app for watching global bitcoin arbitrages as
            a heatmap.
            <br /> You can check it out here{" "}
            <Link href="https://thirteenth.hongvyo.com" >thirteenth.hongvyo.com</Link>
          </div>
          {/* <br /> */}
          {/* Which is a platform for everything real-estates. Natu */}
        </div>
        <div className={cn("h-72", "w-72", "relative", "flex-none")}>
          <Image
            draggable={false}
            className={cn("rounded-full")}
            src="about.jpg"
            alt="me!"
            // fill={true}
            layout={"fill"}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
