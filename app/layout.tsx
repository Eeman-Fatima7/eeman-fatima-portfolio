import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eeman Fatima | AI/ML Engineer",
  description: "Portfolio of Eeman Fatima — AI/ML Engineer with experience in machine learning, NLP, computer vision, and web development.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
