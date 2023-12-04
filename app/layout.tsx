import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import icon from "@/app/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aidan | Full Stack Developer",
  description: "I'm a full stack developer based in Spain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
