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