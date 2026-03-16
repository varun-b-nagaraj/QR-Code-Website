import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "County Parks Educational Trail",
  description: "Concept prototype for a county educational trail and QR learning system.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} bg-county-bg text-county-text antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
