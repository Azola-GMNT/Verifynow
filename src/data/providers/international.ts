import { Provider } from "./types";

export const internationalProviders: Provider[] = [

  {
    id: "worldcheck",
    short: "WorldCheck",
    name: "Refinitiv World-Check",
    category: "AML",
    country: "International",
    status: "Online",
    response: "805 ms",
    lastChecked: "25 sec ago",
  },

  {
    id: "dowjones",
    short: "Dow Jones",
    name: "Dow Jones Risk & Compliance",
    category: "AML",
    country: "International",
    status: "Online",
    response: "731 ms",
    lastChecked: "18 sec ago",
  },

  {
    id: "ofac",
    short: "OFAC",
    name: "US Treasury OFAC",
    category: "Sanctions",
    country: "United States",
    status: "Online",
    response: "674 ms",
    lastChecked: "17 sec ago",
  },

  {
    id: "un",
    short: "UN",
    name: "United Nations Sanctions",
    category: "Sanctions",
    country: "International",
    status: "Online",
    response: "602 ms",
    lastChecked: "15 sec ago",
  },

  {
    id: "eu",
    short: "EU",
    name: "European Union Sanctions",
    category: "Sanctions",
    country: "European Union",
    status: "Online",
    response: "619 ms",
    lastChecked: "18 sec ago",
  },

];