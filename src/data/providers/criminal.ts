import { Provider } from "./types";

export const criminalProviders: Provider[] = [

  {
    id: "saps",
    short: "SAPS",
    name: "South African Police Service",
    category: "Criminal",
    country: "South Africa",
    status: "Offline",
    response: "--",
    lastChecked: "6 min ago",
  },

  {
    id: "npa",
    short: "NPA",
    name: "National Prosecuting Authority",
    category: "Criminal",
    country: "South Africa",
    status: "Online",
    response: "532 ms",
    lastChecked: "12 sec ago",
  },

  {
    id: "court-records",
    short: "Courts",
    name: "South African Court Records",
    category: "Criminal",
    country: "South Africa",
    status: "Online",
    response: "681 ms",
    lastChecked: "14 sec ago",
  },

  {
    id: "interpol-watch",
    short: "Interpol",
    name: "Interpol Notices",
    category: "Criminal",
    country: "International",
    status: "Online",
    response: "742 ms",
    lastChecked: "20 sec ago",
  },

];