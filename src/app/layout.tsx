import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Search Band App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
