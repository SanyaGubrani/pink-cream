import type { ElementType } from "react";

type NavItem = {
  href: string;
  label: string;
  icon?: ElementType;
  trigger?: never;
  content?: never;
};

type DropdownItem = {
  href?: never;
  label?: never;
  trigger?: string;
  icon?: ElementType;
  content: {
    items: {
      href: string;
      title: string;
      description?: string;
      icon?: ElementType;
    }[];
  };
};

export type HeaderNavItem = NavItem | DropdownItem;
