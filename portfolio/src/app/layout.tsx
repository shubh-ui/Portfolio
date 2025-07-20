import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import "./animations.css"
import Navbar from "@/components/Navbar";
import CenteredContainer from "@/components/Container";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // optional: useful for Tailwind
  fallback: ['system-ui', 'sans-serif'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans', // optional if you want to use with Tailwind
  display: 'swap',
  weight: ['300', '400', '600', '700'], // adjust as needed
})

export const metadata: Metadata = {
  title: "Shubham Patil - Frontend Developer",
  description: "Portfolio showcasing my projects, skills, and experience in modern web development.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        lang="en" className={`${openSans.className} ${inter.className}`}
      >
        <Navbar />
        <CenteredContainer>
          {children}
        </CenteredContainer>
      </body>
    </html>
  );
}
