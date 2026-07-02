import type { Metadata } from "next";
import { Anton, Archivo, Space_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barbell Beast Studio — Train Like a Beast",
  description:
    "Barbell Beast Studio is a hardcore strength gym built for iron, chalk, and progress. Free 1-day trial available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-bone">{children}</body>
    </html>
  );
}
