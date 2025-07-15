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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

export default function Navbar() {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

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
    <header className="bg-background/85 shadow-accent/30 sticky top-0 z-50 w-full py-4 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" title="website-logo" className="text-2xl font-semibold">
          Pink<span className="text-accent">Cream</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden items-center gap-5 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navConfig.map((item: HeaderNavItem, index: number) =>
                item.href ? (
                  <NavigationMenuItem key={index}>
                    <Link href={item.href} passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "hover:text-accent font-bitter bg-transparent text-sm hover:bg-transparent"
                        )}
                      >
                        {item.label}
                      </NavigationMenuLink>{" "}
                    </Link>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="hover:text-accent font-bitter bg-transparent text-sm hover:bg-transparent">
                      {item.trigger}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="bg-accent/10 flex w-[440px] flex-col gap-2 rounded-md p-2 text-xs">
                        {item.content?.items.map((subItem) => (
                          <ListItem key={subItem.title} title={subItem.title} href={subItem.href} icon={subItem.icon}>
                            {subItem.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
          {/* Theme button  */}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="ml-auto flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="border-b py-7"></div>
              <nav className="mt-2 flex flex-col gap-1 px-4">
                {navConfig.map((item: HeaderNavItem, index: number) =>
                  item.href ? (
                    // nav links
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setSheetOpen(false)}
                      className="group hover:bg-accent/50 hover:text-accent-foreground font-bitter flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium transition-colors"
                    >
                      {item.icon && (
                        <item.icon className="text-muted-foreground group-hover:text-accent-foreground size-5 transition-colors" />
                      )}
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    // Accordion for Dropdown
                    item.trigger && (
                      <Accordion key={index} type="single" collapsible className="w-full">
                        <AccordionItem value={item.trigger} className="border-b-0">
                          <AccordionTrigger className="group hover:bg-accent/50 hover:text-accent-foreground font-bitter flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium transition-colors hover:no-underline">
                            {item.icon && (
                              <item.icon className="text-muted-foreground group-hover:text-accent-foreground size-6 transition-colors" />
                            )}
                            <span className="w-full text-start">{item.trigger}</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="border-accent/50 ml-2 flex flex-col gap-1 border-l-2 pt-2 pl-6">
                              {item.content?.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  onClick={() => setSheetOpen(false)}
                                  className="text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground block rounded-md px-3 py-2 transition-colors"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    )
                  )
                )}
                {/* separator */}
                <Separator className="my-4" />
                <div className="px-3">
                  <p className="text-muted-foreground font-cormorant text-2xl font-light">
                    © {new Date().getFullYear()} PinkCream Inc.
                  </p>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Helper component for dropdown items styling
const ListItem = ({
  className,
  title,
  href,
  icon: Icon,
  children,
}: {
  className?: string;
  title: string;
  href: string;
  icon?: React.ElementType;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "focus:bg-background hover:bg-background font-bitter flex flex-row items-center justify-start gap-5 rounded-md leading-none no-underline transition-colors outline-none select-none",
            className
          )}
        >
          {Icon && (
            <div className="bg-muted/60 border-muted flex-shrink-0 rounded-lg border-2 px-3 py-2.5">
              <Icon className="text-muted-foreground size-6" />
            </div>
          )}

          <div>
            <div className="font-bitter text-foreground text-start text-xs font-medium">{title}</div>
            <p className="text-muted-foreground text-start text-xs font-light">{children}</p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
