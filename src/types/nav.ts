type NavItem = {
  href: string;
  label: string;
  trigger?: never; 
  content?: never; 
};

type DropdownItem = {
  href?: never; 
  label?: never; 
  trigger: string;
  content: {
    items: {
      href: string;
      title: string;
    }[];
  };
};

export type HeaderNavItem = NavItem | DropdownItem;
