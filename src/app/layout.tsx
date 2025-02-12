import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammed Yazeen | Portfolio",
  description: "Personal portfolio website of Muhammed Yazeen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} min-h-screen bg-background antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
