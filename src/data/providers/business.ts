import { Provider } from "./types";

export const businessProviders: Provider[] = [

  {
    id: "opencorporates",
    short: "OpenCorp",
    name: "OpenCorporates",
    category: "Business",
    country: "International",
    status: "Online",
    response: "611 ms",
    lastChecked: "18 sec ago",
  },

  {
    id: "companies-house",
    short: "UKCH",
    name: "UK Companies House",
    category: "Business",
    country: "United Kingdom",
    status: "Online",
    response: "585 ms",
    lastChecked: "17 sec ago",
  },

  {
    id: "sec",
    short: "SEC",
    name: "US Securities and Exchange Commission",
    category: "Business",
    country: "United States",
    status: "Online",
    response: "802 ms",
    lastChecked: "22 sec ago",
  },

];