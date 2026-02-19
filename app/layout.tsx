import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import {  MessageCircle } from "lucide-react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GlobitImpot",
  description: "Import business in Kumasi China to Ghana shipping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Link
          href="https://wa.me/+233-551193503"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[60] bg-custom-green text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 group flex items-center gap-2"
          aria-label="Chat with us on WhatsApp"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-normal text-lg">
            Chat With Us
          </span>
          <MessageCircle className="h-7 w-7" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-custom-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-custom-green"></span>
          </span>
        </Link>
      </body>
    </html>
  );
}
