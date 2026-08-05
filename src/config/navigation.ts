import {
  LayoutDashboard,
  Search,
  History,
  ShieldCheck,
  Building2,
  Briefcase,
  GraduationCap,
  Gavel,
  Landmark,
  Home,
  Pickaxe,
  Plug,
  BarChart3,
  Settings,
  Users,
  LucideIcon,
} from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface NavigationSection {
  heading: string;
  items: NavigationItem[];
}

export const navigation: NavigationSection[] = [
  {
    heading: "OVERVIEW",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    heading: "VERIFICATIONS",
    items: [
      {
        title: "New Verification",
        href: "/verifications/new",
        icon: Search,
      },
      {
        title: "Verification History",
        href: "/verifications",
        icon: History,
      },
    ],
  },

  {
    heading: "MODULES",
    items: [
      {
        title: "Identity",
        href: "/modules/identity",
        icon: ShieldCheck,
      },
      {
        title: "Company",
        href: "/modules/company",
        icon: Building2,
      },
      {
        title: "Employment",
        href: "/modules/employment",
        icon: Briefcase,
      },
      {
        title: "Education",
        href: "/modules/education",
        icon: GraduationCap,
      },
      {
        title: "Criminal",
        href: "/modules/criminal",
        icon: Gavel,
      },
      {
        title: "Government",
        href: "/modules/government",
        icon: Landmark,
      },
      {
        title: "Property",
        href: "/modules/property",
        icon: Home,
      },
      {
        title: "Mining",
        href: "/modules/mining",
        icon: Pickaxe,
      },
    ],
  },

  {
    heading: "SYSTEM",
    items: [
      {
        title: "Providers",
        href: "/providers",
        icon: Plug,
      },
      {
        title: "Insights",
        href: "/insights",
        icon: BarChart3,
      },
      {
        title: "Team",
        href: "/team",
        icon: Users,
      },
      {
        title: "Settings",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
];