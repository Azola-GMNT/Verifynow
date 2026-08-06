import { Provider } from "./types";

export const identityProviders: Provider[] = [

  {
    id: "dha",
    short: "DHA",
    name: "Department of Home Affairs",
    category: "Identity",
    country: "South Africa",
    status: "Online",
    response: "184 ms",
    lastChecked: "15 sec ago",
  },

  {
    id: "cipc",
    short: "CIPC",
    name: "Companies and Intellectual Property Commission",
    category: "Business",
    country: "South Africa",
    status: "Online",
    response: "221 ms",
    lastChecked: "10 sec ago",
  },

  {
    id: "sars",
    short: "SARS",
    name: "South African Revenue Service",
    category: "Tax",
    country: "South Africa",
    status: "Slow",
    response: "1.4 s",
    lastChecked: "12 sec ago",
  },

  {
    id: "uif",
    short: "UIF",
    name: "Unemployment Insurance Fund",
    category: "Employment",
    country: "South Africa",
    status: "Online",
    response: "278 ms",
    lastChecked: "14 sec ago",
  },

  {
    id: "labour",
    short: "DoL",
    name: "Department of Labour",
    category: "Employment",
    country: "South Africa",
    status: "Online",
    response: "312 ms",
    lastChecked: "18 sec ago",
  },

];