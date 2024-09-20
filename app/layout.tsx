import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kompyte",
  description: "Kompyte is a competitive intelligence software focused on enabling go-to-market teams with the insights they need to overcome the competition. Using machine learning AI, Kompyte collects, analyzes, and organizes data to help teams generate and share actionable insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
