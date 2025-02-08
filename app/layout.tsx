// app/layout.tsx
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Ubuntu_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";

const ubuntuMono = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ["latin"],
});
// Import Roboto with different styles (weights, italics if needed)
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],  // Specify the weights you want
  variable: '--font-roboto', // Optional: Define as a CSS variable
});

export const metadata: Metadata = {
  title: "Abdulmajid's Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({
  contacticons,
  children,
  leftverticalline,
}: Readonly<{
  children: ReactNode;
  contacticons:ReactNode;
  leftverticalline: ReactNode;
}>) {
  
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`flex flex-row justify-between items-center ${ubuntuMono.className} ${roboto.className}`}
      >
        {children}
        {contacticons}
        {leftverticalline}
      </body>
    </html>
  );
}
