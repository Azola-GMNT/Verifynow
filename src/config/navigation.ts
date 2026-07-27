import {
  LayoutDashboard,
  UserRound,
  Building2,
  Users,
  BarChart3,
  Plug,
  Settings,
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
        title: "Individuals",
        href: "/verifications/individual",
        icon: UserRound,
      },
      {
        title: "Organisations",
        href: "/verifications/organisation",
        icon: Building2,
      },
    ],
  },

  {
    heading: "MANAGEMENT",
    items: [
      {
        title: "Team",
        href: "/team",
        icon: Users,
      },
    ],
  },

  {
    heading: "INSIGHTS",
    items: [
      {
        title: "Insights",
        href: "/insights",
        icon: BarChart3,
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
        title: "Settings",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
];