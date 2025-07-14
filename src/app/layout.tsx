import type { Metadata } from "next";
import "./globals.css";
import { cn, constructMetadata } from "@/lib/utils";
import { Geist, Bitter, Cormorant } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = constructMetadata({});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bitter = Bitter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bitter",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen antialiased w-full mx-auto scroll-smooth",
          geistSans.variable,
          bitter.variable,
          cormorant.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
