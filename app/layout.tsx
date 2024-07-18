import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "./_components/ui/navbar";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import "reflect-metadata";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Hongvyo's devlog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className={clsx("h-svw", "w-svw")}>
            <NavBar />
            <div
              className={clsx(
                "flex",
                "self-center",
                "justify-center",
                "w-full"
              )}
            >
              <div className={clsx("flex-none", "max-w-60")}></div>
              <div
                className={clsx("flex-1", "max-w-screen-sm", "py-6", "lg:px-8")}
              >
                {children}
              </div>
              <div className={clsx("flex-none", "max-w-60")}></div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
