import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { MobileSplash } from "@/components/layout/MobileSplash";
import "./globals.css";

const frosty = Outfit({
  variable: "--font-frosty",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MantroOps — Maintenance & Operations for Engineering Firms",
  description:
    "MantroOps is a maintenance and operations platform built for engineering firms in Ghana. Track assets, work orders, maintenance, safety, approvals, and reporting — online and offline.",
  openGraph: {
    title: "MantroOps — Coming Soon",
    description:
      "Simple, field-ready maintenance operations for Ghanaian engineering firms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${frosty.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-foggy">
        <MobileSplash />
        {children}
      </body>
    </html>
  );
}
