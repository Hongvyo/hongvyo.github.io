"use client";
import { menus } from "@/app/_constants/menus";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "h-[48px]",
        "h-full",
        "border-b",
        "flex",
        "justify-center",
        "self-center"
      )}
    >
      <div className={cn("flex-none", "max-w-60")}></div>
      <div className={cn("flex-1", "max-w-screen-lg")}>
        <NavigationMenu className={cn("h-full", "py-2")}>
          <NavigationMenuList>
            {menus.map(({ title, description, items, href }, idx) => {
              if (items) {
                return (
                  <NavigationMenuItem key={idx}>
                    <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {items.map((item, idx) => {
                          const combinedHref = href + item.href;
                          return (
                            <li key={idx}>
                              <Link href={combinedHref} legacyBehavior passHref>
                                <NavigationMenuLink
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    // navigationMenuTriggerStyle()
                                    // pathname == combinedHref && "font-extrabold"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {item.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </NavigationMenuLink>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem key={idx}>
                  <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle()
                        // pathname == href && "font-extrabold"
                      )}
                    >
                      {title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className={cn("flex-none", "max-w-60")}></div>
    </div>
  );
}
