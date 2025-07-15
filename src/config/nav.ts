import { Home, Users, BookText, Mail, LayoutGrid, Server, Cloud, Code, Shield } from "lucide-react";

export const navConfig = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    trigger: "Services",
    icon: LayoutGrid,
    content: {
      items: [
        {
          href: "/services/hosting",
          title: "Managed Hosting",
          description: "Fast and secure hosting for your applications.",
          icon: Server,
        },
        {
          href: "/services/cloud",
          title: "Cloud Solutions",
          description: "Scalable cloud infrastructure.",
          icon: Cloud,
        },
        {
          href: "/services/development",
          title: "Web Development",
          description: "Custom websites built with modern tech.",
          icon: Code,
        },
        {
          href: "/services/security",
          title: "Cyber Security",
          description: "Protect digital assets from threats and breaches.",
          icon: Shield,
        },
      ],
    },
  },
  {
    href: "/about",
    label: "About",
    icon: Users,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: BookText,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: Mail,
  },
];
