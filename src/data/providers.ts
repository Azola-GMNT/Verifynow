export interface Provider {
  id: string;
  short: string;
  name: string;
  category: string;
  country: string;
  status: "Online" | "Slow" | "Offline";
  response: string;
  lastChecked: string;
}

export const providers: Provider[] = [
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
    name: "Companies & Intellectual Property Commission",
    category: "Company",
    country: "South Africa",
    status: "Online",
    response: "228 ms",
    lastChecked: "8 sec ago",
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
    id: "mie",
    short: "MIE",
    name: "Managed Integrity Evaluation",
    category: "Employment",
    country: "South Africa",
    status: "Online",
    response: "310 ms",
    lastChecked: "5 sec ago",
  },
  {
    id: "deeds",
    short: "Deeds",
    name: "Deeds Office",
    category: "Property",
    country: "South Africa",
    status: "Online",
    response: "420 ms",
    lastChecked: "7 sec ago",
  },
  {
    id: "dmpr",
    short: "DMPR",
    name: "Department of Mineral Resources",
    category: "Mining",
    country: "South Africa",
    status: "Online",
    response: "505 ms",
    lastChecked: "11 sec ago",
  },
  {
    id: "icglr",
    short: "ICGLR",
    name: "International Conference on the Great Lakes Region",
    category: "Mining",
    country: "Regional",
    status: "Online",
    response: "612 ms",
    lastChecked: "18 sec ago",
  },
  {
    id: "kp",
    short: "KP",
    name: "Kimberley Process",
    category: "Mining",
    country: "International",
    status: "Online",
    response: "735 ms",
    lastChecked: "21 sec ago",
  },
];