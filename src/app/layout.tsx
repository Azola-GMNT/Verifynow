import type { Metadata } from "next";
import "./globals.css";

import { VerificationProvider } from "@/context/VerificationContext";

export const metadata: Metadata = {
  title: "VerifyNow",
  description: "Digital identity verification platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <VerificationProvider>
          {children}
        </VerificationProvider>
      </body>
    </html>
  );
}