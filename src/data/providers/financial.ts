import { Provider } from "./types";

export const financialProviders: Provider[] = [

  {
    id: "experian",
    short: "Experian",
    name: "Experian South Africa",
    category: "Credit",
    country: "South Africa",
    status: "Online",
    response: "308 ms",
    lastChecked: "8 sec ago",
  },

  {
    id: "transunion",
    short: "TransUnion",
    name: "TransUnion South Africa",
    category: "Credit",
    country: "South Africa",
    status: "Online",
    response: "352 ms",
    lastChecked: "10 sec ago",
  },

  {
    id: "compuscan",
    short: "Compuscan",
    name: "Compuscan",
    category: "Credit",
    country: "South Africa",
    status: "Online",
    response: "418 ms",
    lastChecked: "11 sec ago",
  },

  {
    id: "xds-credit",
    short: "XDS",
    name: "XDS Credit Bureau",
    category: "Credit",
    country: "South Africa",
    status: "Online",
    response: "391 ms",
    lastChecked: "13 sec ago",
  },

  {
    id: "ncr",
    short: "NCR",
    name: "National Credit Regulator",
    category: "Financial",
    country: "South Africa",
    status: "Slow",
    response: "1.3 s",
    lastChecked: "19 sec ago",
  },

];