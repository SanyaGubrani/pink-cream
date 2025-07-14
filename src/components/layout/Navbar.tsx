"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navConfig } from "@/config/nav";
import type { HeaderNavItem } from "@/types/nav";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
import { ThemeToggle } from "../theme-toggle";

export default function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768 && sheetOpen) {
        setSheetOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sheetOpen]);

  return (
    <header className="sticky top-0 z-50 py-3 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 py-1.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" title="website-logo" className="font-semibold text-2xl">
          Pink<span className="text-accent">Cream</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <NavigationMenu>
            <NavigationMenuList>
              {navConfig.map((item: HeaderNavItem, index: number) =>
                item.href ? (
                  <NavigationMenuItem key={index}>
                    <Link href={item.href} passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.label}</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger>{item.trigger}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 min-w-[220px] bg-popover rounded-md shadow-lg">
                        {item.content?.items.map((subItem) => (
                          <ListItem key={subItem.title} title={subItem.title} href={subItem.href}>
                            {/* Optional: Add a description here */}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
          {/* Theme button at the end */}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation (Drawer) */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <ThemeToggle />
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-14 flex flex-col gap-4 px-3">
                {navConfig.map((item: HeaderNavItem, index: number) =>
                  item.href ? (
                    <Link
                      key={index}
                      href={item.href}
                      className="font-semibold text-lg px-4 py-2 rounded-md hover:bg-accent/60 transition"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div key={index} className="mb-2">
                      <div className="font-semibold text-lg mb-2 px-4">{item.trigger}</div>
                      <ul className="flex flex-col gap-2 pl-4">
                        {item.content?.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="text-base px-3 py-2 rounded hover:bg-accent/60 transition"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Helper component for dropdown items styling
const ListItem = ({ className, title, children, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
