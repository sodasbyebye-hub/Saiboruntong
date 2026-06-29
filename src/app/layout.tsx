import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Saiboruntong Generator Manufacturer | Chongqing China",
    template: "%s | Saiboruntong",
  },
  description:
    "Factory direct gasoline generators, diesel generator sets, water pumps, lighting towers and emergency power equipment from Chongqing, China.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
