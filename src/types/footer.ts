import type { ElementType } from "react";

type LinkItem = {
  href: string;
  label: string;
};

type LinkSection = {
  title: string;
  links: LinkItem[];
};

type SocialLink = {
  href: string;
  icon: ElementType;
};

export type Footer = {
  brand: {
    name: string;
    description: string;
    icon: ElementType;
  };
  linkSections: LinkSection[];
  contactSection: {
    title: string;
    details: string[];
    buttonText: string;
  };
  socialLinks: SocialLink[];
  copyrightText: string;
};
