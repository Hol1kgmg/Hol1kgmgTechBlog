import 'frontend/styles/globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hol1kgmg Tech Blog",
  description: "技術ブログとポートフォリオ",
  keywords: ["技術ブログ", "ポートフォリオ", "Web開発"],
  authors: [{ name: "Hol1kgmg" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
