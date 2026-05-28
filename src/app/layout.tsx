import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Emmanouil Smyrnakis — Software Engineer",
  description:
    "Frontend Software Engineer specializing in React, Next.js, and AI-powered web applications.",
  keywords: [
    "Emmanouil Smyrnakis",
    "Software Engineer",
    "React",
    "Next.js",
    "Frontend",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${rubik.variable} antialiased`}>{children}</body>
    </html>
  );
}
