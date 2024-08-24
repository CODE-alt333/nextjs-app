import type { Metadata } from "next";

import "./globals.css";
import navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Travel Guide",
  description: "Travel Guide App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main> 
        <Footer />
      </body>
    </html>
  );
}
